#!/usr/bin/env node
const fs = require("fs");
// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require("shelljs");
// eslint-disable-next-line import/no-extraneous-dependencies
const reactDocs = require("react-docgen");

const packagesProcessInTsc = ["Tokens"];
const skipPackages = ["Guard", "Icon", "Stylers", "helpers", "Calendar"];

const fileName = "index.d.ts";
/* prettier-ignore */
const renderDeclarationTemplate = ({ displayName="", props = "" }) => { return `export default ${displayName};

${props}`;};

const createPropsList = ({ info }) => {
  if (!info || !info.props) return "";

  const dottedNotation = info.displayName.includes(".");
  const subComponent = info.displayName.substring(info.displayName.indexOf(".") + 1, info.displayName.length);
  const displayName = dottedNotation ? subComponent : info.displayName;
  const compName = info.displayName.substring(0, info.displayName.indexOf("."));

  const declareComp = !dottedNotation
    ? `declare function ${displayName}(props:${displayName}Props): JSX.Element;`
    : `declare namespace ${compName} {
      function ${displayName}(props:${displayName}Props): JSX.Element;`;

  /* prettier-ignore */
  const list = [`${declareComp}
  interface ${displayName}Props extends React.HTMLAttributes<HTMLElement> {`,
  ];

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
    /* prettier-ignore */
    return list.push(` ${description}
    ${key}${req} ${type};\n`);
  });
  list.push(`}`);
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
      const arrayOfComponentsDefinitions = reactDocs.parse(
        subComponentContent,
        reactDocs.resolver.findAllComponentDefinitions
      );
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
      const arrayOfComponentsDefinitions = reactDocs.parse(
        componentContent,
        reactDocs.resolver.findAllComponentDefinitions
      );

      const info = extractCorrectComponentDefinition({ desireDefinition: folder, arrayOfComponentsDefinitions });

      if (!info) return;

      const propsList = processPropsList({
        info,
        componentContent,
        path,
        paprikaDocs,
        folder,
      });

      const template = renderDeclarationTemplate({
        displayName: info.displayName,
        props: propsList.join(""),
      });

      fs.writeFileSync(`${path}/src/${fileName}`, template, { encoding: "utf8", flag: "w" });
    } catch (e) {
      console.warn(e);
    }
  }
});

shell.exec(`prettier "**/${fileName}" --write`);
