#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { createRequire } from "module";
import parseFileToReactDoc from "./parseFileToReactDoc.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const getFilePath = require("./reactDocHelpers/getFilePath");
const readmeTemplate = require("./reactDocHelpers/readmeTemplate");

const skippedPackages = [
  "BuildTranslations",
  "Calendar",
  "Constants",
  "DynamicHyperlinkTransformer",
  "Guard",
  "helpers",
  "Icon",
  "InlineEditors",
  "MockEndpoints",
  "Overlay",
  "seducer",
  "Stylers",
  "Tokens",
];

const initAutoReadme = ({ path, content }) => {
  fs.writeFileSync(
    `${path}/README.md`,
    `<!-- content -->
${content}
<!-- eoContent -->
      `,
    "utf8"
  );
};

const createPropsTable = ({ info }) => {
  if (!info || !info.props) return "";

  const table = [
    `### ${info.displayName} \n`,
    "| Prop  | Type  | required  | default   | Description |\n",
    "|-------|-------| --------  | --------- | ----------- |\n",
  ];

  Object.keys(info.props).map((key) => {
    const v = info.props[key] || {};
    const typeKey = "tsType" in v ? "tsType" : "type";
    let type = "-";
    if (typeKey in v) {
      if (v[typeKey].name === "union") {
        type = `[${v[typeKey]["tsType" in v ? "elements" : "value"]?.map((i) => i.name)}]`;
      } else {
        type =
          v[typeKey].name !== "enum"
            ? v[typeKey].name
            : Array.isArray(v[typeKey].value)
              ? `[${v[typeKey].value.map((i) => ` ${i.value}`)}]`
              : v[typeKey].value;
      }
    }

    const required = "required" in v ? v.required.toString() : " ";
    const defaultValue = "defaultValue" in v ? v.defaultValue.value : "-";
    const description = "description" in v ? v.description : " ";

    return table.push(`|${key}|${type}|${required}|${defaultValue}| ${description}|\n`);
  });

  return table.join("");
};

const extractCorrectComponentDefinition = ({ desireDefinition, arrayOfComponentsDefinitions }) => {
  const definition = arrayOfComponentsDefinitions.filter((def) => def.displayName === desireDefinition);
  return definition[0];
};

const processPropTables = ({ info, path, paprikaDocs = null }) => {
  const propsTable = [];

  if (info) {
    propsTable.push(createPropsTable({ info }));
  }

  if (paprikaDocs && "subComponents" in paprikaDocs) {
    paprikaDocs.subComponents.forEach((subComponent) => {
      const subComponentFilePath = getFilePath(`${path}/src/components/${subComponent}`, subComponent);
      const subComponentContent = fs.readFileSync(subComponentFilePath, "utf-8");
      const arrayOfComponentsDefinitions = parseFileToReactDoc(subComponentContent, subComponentFilePath);

      let _info = extractCorrectComponentDefinition({
        desireDefinition: subComponent,
        arrayOfComponentsDefinitions,
      });

      if (_info) {
        propsTable.push(createPropsTable({ info: _info }));
      } else {
        _info = extractCorrectComponentDefinition({
          desireDefinition: `${info.displayName}.${subComponent}`,
          arrayOfComponentsDefinitions,
        });

        propsTable.push(createPropsTable({ info: _info }));
      }
    });
  }

  return propsTable;
};

const packages = fs.readdirSync("packages");

for (const folder of packages) {
  if (skippedPackages.includes(folder)) continue;

  const folderPath = `./packages/${folder}`;

  try {
    const { paprikaDocs = null, name, description = "required description" } = JSON.parse(
      fs.readFileSync(`${folderPath}/package.json`, "utf8")
    );

    const readmeContent = fs.readFileSync(`${folderPath}/README.md`, "utf8");
    const filePath = getFilePath(`${folderPath}/src`, folder);
    const componentContent = fs.readFileSync(filePath, "utf-8");
    const arrayOfComponentsDefinitions = parseFileToReactDoc(componentContent, filePath);
    const info = extractCorrectComponentDefinition({ desireDefinition: folder, arrayOfComponentsDefinitions });

    if (!info) continue;

    if (readmeContent.search(/<!-- content/g) >= 0) {
      const readmeContentExtracted = readmeContent.match(/<!-- content -->[\s\S]*?<!-- eoContent -->/g);
      const propTables = processPropTables({
        info,
        componentContent,
        path: folderPath,
        paprikaDocs,
        folder,
        readmeContent,
      });
      const updatedReadmeContent = readmeTemplate({
        displayName: info.displayName,
        name,
        description,
        content: readmeContentExtracted,
        props: propTables.join("\n\n"),
      });

      fs.writeFileSync(`${folderPath}/README.md`, updatedReadmeContent, { encoding: "utf8", flag: "w" });
      continue;
    }

    initAutoReadme({ path: folderPath, content: readmeContent });
  } catch (e) {
    console.warn(folder, e);
  }
}

const prettier = path.join(__dirname, "..", "node_modules", ".bin", "prettier");
execSync(`"${prettier}" "**/*.+(md)" --write --loglevel silent`, { stdio: "inherit" });
