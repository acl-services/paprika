// eslint-disable-next-line import/no-extraneous-dependencies
const inquirer = require("inquirer");
const st = require("../../../.storybook/storyTree");
const { createFile } = require("./createFile");
const { renderStoryTreeTemplate } = require("../templates/storyTreeTemplate");

function getStoryCategoriesInquiry(storyBookCategories) {
  return [
    {
      type: "list",
      name: "storyCategory",
      message: "Which story category does this component belong to?",
      choices: storyBookCategories,
    },
  ];
}

function addToStoryTree(newComponentName) {
  const targetFilePath = "../../.storybook/storyTree.js";
  const storyTree = st.storyTree;
  const storyCategoryChoices = storyTree.map(type => {
    return {
      name: type.category,
    };
  });

  inquirer.prompt(getStoryCategoriesInquiry(storyCategoryChoices)).then(answers => {
    const { storyCategory } = answers;

    for (const storyType of storyTree) {
      if (storyType.category === storyCategory) {
        storyType.components.push(newComponentName);
        break;
      }
    }

    createFile(targetFilePath, renderStoryTreeTemplate({ storyTree }), true);
  });
}

module.exports = {
  addToStoryTree,
};
