#!/usr/bin/env node
const fs = require("fs");
// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require("shelljs");
const parseFileToReactDoc = require("./parseFileToReactDoc");

const packagesProcessInTsc = ["Tokens", "Constants"];
const skipPackages = ["Guard", "Icon", "Stylers", "helpers", "Calendar"];

const fileName = "index.d.ts";

const renderDeclarationTemplate = ({ displayName = "", props = "", typeConstants = "" }) => {
  return `export default ${displayName};

${props}

${typeConstants}
`;
};

const createPropsList = ({ info }) => {
  if (!info || !info.props) return "";

  const dottedNotation = info.displayName.includes(".");
  const subComponent = info.displayName.substring(info.displayName.indexOf(".") + 1, info.displayName.length);
  const displayName = dottedNotation ? subComponent : info.displayName;
  const compName = info.displayName.substring(0, info.displayName.indexOf("."));

  const declareComp = !dottedNotation
    ? `declare function ${displayName}(props:${displayName}Props): JSX.Element;`
    : `
    declare namespace ${compName} {
      function ${displayName}(props:${displayName}Props): JSX.Element;`;

  const list = [
    `${declareComp}
  interface ${displayName}Props{
    [x:string]: any;
    `,
  ];

  /**
   * [x:string]:any; to support typechecking for additional props
   * autocomplete suggestions will display existing props first
   * compared to using React.HTMLAttributes which suggest multiple html attributes
   */

  Object.keys(info.props).map(key => {
    const v = info.props[key] || {};
    let type = "-";

    if ("type" in v) {
      switch (v.type.name) {
        case "bool": {
          type = `boolean`;
          break;
        }
        case "node": {
          type = "React.ReactNode";
          break;
        }
        case "func": {
          type = "(...args: any[])=> any";
          break;
        }
        case "arrayOf": {
          type = `${v.type.value.name}[]`;
          break;
        }
        case "union": {
          type = `${v.type.value.map(i => i.name)}`.replace(/,/g, "|");
          break;
        }
        default: {
          type =
            // eslint-disable-next-line no-nested-ternary
            v.type.name !== "enum"
              ? v.type.name
              : Array.isArray(v.type.value)
              ? `${v.type.value.map(i => i.value)}`.replace(/,/g, "|")
              : v.type.value;
        }
      }
    }

    const req = v.required.toString() === "false" ? "?:" : ":";
    const description = v.description ? `/** ${v.description} */` : "";

    return list.push(` ${description}
    ${key}${req} ${type};\n`);
  });
  list.push(`\n }\n`);
  if (dottedNotation) list.push(`}`);
  return list.join("");
};

const extractCorrectComponentDefinition = ({ desireDefinition, arrayOfComponentsDefinitions }) => {
  const definition = arrayOfComponentsDefinitions.filter(def => def.displayName === desireDefinition);

  if (!definition.length) {
    console.log(
      `sub-component with displayName === ${desireDefinition}, more found: ${JSON.stringify(
        arrayOfComponentsDefinitions.map(i => i.displayName)
      )}`
    );
  }

  return definition[0];
};

const processPropsList = ({ info, folder, path, paprikaDocs = null }) => {
  console.log("Generating .d.ts files...", folder);
  const propsList = [];

  if (info) {
    propsList.push(createPropsList({ info }));
  }

  if (paprikaDocs && "subComponents" in paprikaDocs) {
    paprikaDocs.subComponents.forEach(subComponent => {
      const subComponentContent = fs.readFileSync(`${path}/src/components/${subComponent}/${subComponent}.js`, "utf8");
      const arrayOfComponentsDefinitions = parseFileToReactDoc(subComponentContent);
      let _info = extractCorrectComponentDefinition({
        desireDefinition: subComponent,
        arrayOfComponentsDefinitions,
      });

      if (_info) {
        propsList.push(createPropsList({ info: _info }));
      } else {
        _info = extractCorrectComponentDefinition({
          desireDefinition: `${info.displayName}.${subComponent}`,
          arrayOfComponentsDefinitions,
        });

        propsList.push(createPropsList({ info: _info }));
      }
    });
  }

  return propsList;
};

shell.ls("packages").forEach(folder => {
  if (!skipPackages.includes(folder) && !packagesProcessInTsc.includes(folder)) {
    const path = `./packages/${folder}`;
    try {
      const { paprikaDocs = null } = JSON.parse(fs.readFileSync(`${path}/package.json`, "utf8"));
      const componentContent = fs.readFileSync(`${path}/src/${folder}.js`, "utf8");
      const arrayOfComponentsDefinitions = parseFileToReactDoc(componentContent);

      const info = extractCorrectComponentDefinition({
        desireDefinition: folder,
        arrayOfComponentsDefinitions,
      });

      if (!info) return;

      const propsList = processPropsList({
        info,
        componentContent,
        path,
        paprikaDocs,
        folder,
      });

      // Constants
      const regex = /\.types\./;
      const constants = propsList // return an array, [constants.type]
        .toString()
        .split(" ")
        .filter(e => {
          return regex.test(e);
        });

      const typesConst = constants.map(e =>
        e
          .toString()
          .replace(";", "")
          .replace(/\|/gi, ".")
          .split(/\./)
          .filter((value, index, self) => self.indexOf(value) === index)
      );

      const typesTemp = typesConst
        .map(
          e => `
declare namespace ${e[0]}{
  namespace ${e[1]}{
    namespace ${e[2]}{
      ${e
        .splice(3)
        .map(i => {
          return `
      const ${i}: any;`;
        })
        .join("")}
    }
  }
}`
        )
        .join("");

      const template = renderDeclarationTemplate({
        displayName: info.displayName,
        props: propsList.join(""),
        typeConstants: typesTemp,
      });

      fs.writeFileSync(`${path}/src/${fileName}`, template, {
        encoding: "utf8",
        flag: "w",
      });
    } catch (e) {
      console.warn(e);
    }
  }
});

shell.exec(`prettier "**/${fileName}" --write`);
