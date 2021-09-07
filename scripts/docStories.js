
/**
 * This script runs and generates the corresponding documentation {Component}.stories.mdx files for each package if it doesn't already exist.
 */

const fs = require("fs");
const shell = require("shelljs");

const skipPackages = [
  "BuildTranslations",
  "Calendar",
  "Constants",
  "helpers",
  "Stylers",
  "Overlay",
];

const renderMDXFileTemplate = ({
  displayName = "",
}) => {
  return `
import { Meta, Description } from "@storybook/addon-docs/blocks";
import { getStoryName } from "storybook/storyTree";
import { docsStoryParameters } from "storybook/assets/storyParameters";
import Readme from "../README.md";
import ${displayName} from "../src";

<Meta title={\`\${getStoryName("${displayName}")}/ Docs\`} component={${displayName}} parameters={{ ...docsStoryParameters }} />

<Description markdown={Readme} />
`;
};

shell.ls("packages").forEach(folder => {
  if (!skipPackages.includes(folder)) {
    const path = `./packages/${folder}`;
    const destinationFileName = `${path}/stories/${folder}.stories.mdx`;
    const readMeFile = `${path}/README.md`;

    try {
      if (!fs.existsSync(destinationFileName) && fs.existsSync(readMeFile)) {
        const template = renderMDXFileTemplate({
          displayName: folder
        });

        fs.writeFileSync(`${destinationFileName}`, template, {
          encoding: "utf8",
          flag: "w",
        })
      }
    } catch(err) {
      console.warn(folder, err);
    }
  }
});

