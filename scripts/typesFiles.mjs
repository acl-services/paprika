import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import parseFileToReactDoc from "./parseFileToReactDoc.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const skipPackages = ["Guard", "Icon", "Stylers", "helpers", "Calendar", "BuildTranslations", "Tokens", "Constants", "seducer", "InlineEditors"];

const fileName = "index.d.ts";

const shouldSkipPackage = (folderName) =>
  skipPackages.includes(folderName) || fs.existsSync(`./packages/${folderName}/tsconfig.build.json`);

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

  Object.keys(info.props).map((key) => {
    const v = info.props[key] || {};
    let type = "any";

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
          type = `${v.type.value.map((i) => i.name)}`.replace(/,/g, "|");
          break;
        }
        default: {
          if (v.type.name !== "enum") {
            type = v.type.name;
          } else if (Array.isArray(v.type.value) && v.type.value.length > 0) {
            type = `${v.type.value.map((i) => i.value)}`.replace(/,/g, "|");
          } else if (v.type.value) {
            type = v.type.value;
          } else {
            type = "any";
          }
        }
      }
    }

    const req = v.required === false || v.required?.toString() === "false" ? "?:" : ":";
    const description = v.description ? `/** ${v.description} */` : "";

    return list.push(` ${description}
    ${key}${req} ${type};\n`);
  });
  list.push(`\n }\n`);
  if (dottedNotation) list.push(`}`);
  return list.join("");
};

const extractCorrectComponentDefinition = ({ desireDefinition, arrayOfComponentsDefinitions }) => {
  const definition = arrayOfComponentsDefinitions.filter((def) => def.displayName === desireDefinition);

  if (!definition.length) {
    console.log(
      `sub-component with displayName === ${desireDefinition}, more found: ${JSON.stringify(
        arrayOfComponentsDefinitions.map((i) => i.displayName)
      )}`
    );
  }

  return definition[0];
};

const processPropsList = ({ info, folder, folderPath, paprikaDocs = null }) => {
  console.log("Generating .d.ts files...", folder);
  const propsList = [];

  if (info) {
    propsList.push(createPropsList({ info }));
  }

  if (paprikaDocs && "subComponents" in paprikaDocs) {
    paprikaDocs.subComponents.forEach((subComponent) => {
      const subComponentPath = `${folderPath}/src/components/${subComponent}/${subComponent}.js`;
      const subComponentContent = fs.readFileSync(subComponentPath, "utf8");
      const arrayOfComponentsDefinitions = parseFileToReactDoc(subComponentContent, subComponentPath);
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

const packages = fs.readdirSync("packages");

for (const folder of packages) {
  if (shouldSkipPackage(folder)) continue;

  const folderPath = `./packages/${folder}`;
  try {
    const { paprikaDocs = null } = JSON.parse(fs.readFileSync(`${folderPath}/package.json`, "utf8"));
    const componentContent = fs.readFileSync(`${folderPath}/src/${folder}.js`, "utf8");
    const arrayOfComponentsDefinitions = parseFileToReactDoc(componentContent, `${folderPath}/src/${folder}.js`);

    const info = extractCorrectComponentDefinition({
      desireDefinition: folder,
      arrayOfComponentsDefinitions,
    });

    if (!info) continue;

    const propsList = processPropsList({
      info,
      componentContent,
      folderPath,
      paprikaDocs,
      folder,
    });

    // Constants
    const regex = /\.types\./;
    const constants = propsList
      .toString()
      .split(" ")
      .filter((e) => regex.test(e));

    const typesConst = constants.map((e) =>
      e
        .toString()
        .replace(";", "")
        .replace(/\|/gi, ".")
        .split(/\./)
        .filter((value, index, self) => self.indexOf(value) === index)
    );

    const typesTemp = typesConst
      .map(
        (e) => `
declare namespace ${e[0]}{
  namespace ${e[1]}{
    namespace ${e[2]}{
      ${e
        .splice(3)
        .map((i) => (/null/.test(i) ? "" : `const ${i}: any;`))
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

    const libDir = `${folderPath}/lib`;
    if (!fs.existsSync(libDir)) fs.mkdirSync(libDir, { recursive: true });
    fs.writeFileSync(`${libDir}/${fileName}`, template, {
      encoding: "utf8",
      flag: "w",
    });
  } catch (e) {
    if (e.code === "ERR_REACTDOCGEN_MISSING_DEFINITION") {
      console.warn(`  Skipping ${folder}: no component definition found`);
    } else if (e.code === "ENOENT") {
      console.warn(`  Skipping ${folder}: ${e.path} not found`);
    } else {
      console.warn(e);
    }
  }
}

const prettier = path.join(__dirname, "..", "node_modules", ".bin", "prettier");
execSync(`"${prettier}" "packages/*/lib/${fileName}" --write`, { stdio: "inherit" });
