#!/usr/bin/env node

/**
 * CAVEAT if your main component doesn't return a JSX or React.createElement, executing
 * this script will not parse correctly ReactDOCS therefore will not extract the content in it.
 * EX:
 *
 * // THIS WILL FAIL!!!
 * function Something(prop) {
 *   return props.children;
 * }
 *
 * // THIS WILL WORK
 * function Something(prop) {
 *   return <>props.children</>;
 * }
 */

const fs = require("fs");
// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require("shelljs");
const parseFileToReactDoc = require("./parseFileToReactDoc");
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

// isMenu: {
//   required: false,
//   tsType: [Object],
//   description: 'Icon + text format for Menu'
// },

// isSubmit: {
//   type: [Object],
//   required: false,
//   description: 'If the type attribute should "submit", instead of the default "button".',
//   defaultValue: [Object]
// },

const createPropsTable = ({ info }) => {
  if (!info || !info.props) return "";

  const table = [
    `### ${info.displayName} \n`,
    "| Prop  | Type  | required  | default   | Description |\n",
    "|-------|-------| --------  | --------- | ----------- |\n",
  ];

  Object.keys(info.props).map(key => {
    const v = info.props[key] || {};
    let type = "-";
    if ("type" in v) {
      if (v.type.name === "union") {
        type = `[${v.type.value.map(i => i.name)}]`;
      } else {
        type =
          // eslint-disable-next-line no-nested-ternary
          v.type.name !== "enum"
            ? v.type.name
            : Array.isArray(v.type.value)
            ? `[${v.type.value.map(i => ` ${i.value}`)}]`
            : v.type.value;
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
  const definition = arrayOfComponentsDefinitions.filter(def => def.displayName === desireDefinition);
  return definition[0];
};

const processPropTables = ({ info, path, paprikaDocs = null }) => {
  const propsTable = [];
  // const autoGeneratedContent = readmeTemplate({ name, description, content: contentExtracted });

  if (info) {
    propsTable.push(createPropsTable({ info }));
  }

  // you can define on packages.json a property named paprikaDocs with an attribute subComponent to list
  // extra component that you might want to create and render on the table.
  if (paprikaDocs && "subComponents" in paprikaDocs) {
    paprikaDocs.subComponents.forEach(subComponent => {
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

shell.ls("packages").forEach(folder => {
  if (!skippedPackages.includes(folder)) {
    const folderPath = `./packages/${folder}`;

    try {
      // data from package.json
      const { paprikaDocs = null, name, description = "required description" } = JSON.parse(
        fs.readFileSync(`${folderPath}/package.json`, "utf8")
      );

      const readmeContent = fs.readFileSync(`${folderPath}/README.md`, "utf8");
      const filePath = getFilePath(`${folderPath}/src`, folder);
      const componentContent = fs.readFileSync(filePath, "utf-8");
      const arrayOfComponentsDefinitions = parseFileToReactDoc(componentContent, filePath);
      const info = extractCorrectComponentDefinition({ desireDefinition: folder, arrayOfComponentsDefinitions });

      if (!info) return;

      if (readmeContent.search(/<!-- content/g) >= 0) {
        // the .md file has the content tag, let's extract the content
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
        return;
      }

      initAutoReadme({ path: folderPath, content: readmeContent });
    } catch (e) {
      console.warn(folder, e);
    }
  }
});

shell.exec('prettier "**/*.+(md)" --write --loglevel silent');
