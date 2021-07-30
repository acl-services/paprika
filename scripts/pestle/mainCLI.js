#!/usr/bin/env node

// Inquirer
// eslint-disable-next-line import/no-extraneous-dependencies
const inquirer = require("inquirer");
// eslint-disable-next-line import/no-extraneous-dependencies
const search_list = require("inquirer-search-list");
const questions = require("./questions");
const choices = require("./choices");

// Templates
const componentTemplates = require("./templates/component");
const testTemplates = require("./templates/tests");
const storyTemplates = require("./templates/stories");

// Helpers
const { createFile } = require("./helpers/createFile");
const { addToStoryTree } = require("./helpers/addToStoryTree");


inquirer.registerPrompt("search-list", search_list);

const addTestsInquiry = componentName => {
  console.log("console log: adding tests");
  inquirer.prompt(questions.addToExistingComponent.selectTestType).then(answers => {
    const path = `./packages/${componentName}/tests`;

    try {
      answers.testType.forEach(fileType => {
        const extensionName = fileType === choices.jest ? "spec" : fileType.toLowerCase();
        const targetFilePath = `${path}/${extensionName}/${componentName}.${extensionName}.js`;
        createFile(targetFilePath, testTemplates[extensionName]({ componentName }));
      });
    } catch (err) {
      throw err;
    }
  });
};

const addStoriesInquiry = componentName => {
  console.log("console log: adding stories");
  inquirer.prompt(questions.addToExistingComponent.selectStoryType).then(answers => {
    const path = `./packages/${componentName}/stories`;

    try {
      // create component story file if it doesn't already exist
      createFile(`${path}/${componentName}.stories.js`, storyTemplates.renderTemplate({ componentName }));

      answers.storyType.forEach(fileType => {
        if (fileType === choices.simpleStory) {
          inquirer.prompt(questions.addToExistingComponent.simpleStoryName).then(answers => {
            const { storyName } = answers;
            createFile(`${path}/examples/${storyName}.js`, storyTemplates[fileType]({ componentName, storyName }));
          });
        } else {
          createFile(`${path}/examples/${fileType}.js`, storyTemplates[fileType]({ componentName }));
        }
      });
    } catch (err) {
      throw err;
    }
  });
};

// TODO
const createNewComponentInquiry = () => {
  inquirer.prompt(questions.createNewComponent).then(answers => {
    const { componentName, componentDescription, componentFiles } = answers;
    const path = `./packages/${componentName}`;
    

    createFile(`${path}/package.json`, componentTemplates.packageJson({ componentName, componentDescription }));
    createFile(`${path}/src/index.js`, componentTemplates.index({ componentName }));
    createFile(`${path}/src/${componentName}.js`, componentTemplates.component({ componentName }));

    // TODO: iterate through component files to determine which to create

    // styles
    createFile(`${path}/src/${componentName}.styles.js`, componentTemplates.styles({ componentName }));
    
    // tests
    createFile(`${path}/tests/${componentName}.spec.js`, testTemplates.spec({ componentName }));
    createFile(`${path}/tests/${componentName}.cypress.js`, testTemplates.cypress({ componentName }));

    // stories
    createFile(`${path}/stories/${componentName}.stories.js`, storyTemplates.renderTemplate({ componentName }));
    addToStoryTree(componentName);
  });
};

const modifyExistingComponentInquiry = () => {
  inquirer.prompt(questions.addToExistingComponent.selectExistingComponent).then(answers => {
    const { componentName, fileType } = answers;

    if (fileType === choices.addTests) {
      addTestsInquiry(componentName);
    } else if (fileType === choices.addStories) {
      addStoriesInquiry(componentName);
    }
  });
};

// Main
inquirer.prompt(questions.newOrExistingComponent).then(answers => {
  const { newOrExistingComponent } = answers;

  // maybe use constants here for comparisons??
  if (newOrExistingComponent === choices.createNewComponent) {
    createNewComponentInquiry();
  } else if (newOrExistingComponent === choices.addToExistingComponent) {
    modifyExistingComponentInquiry();
  } else {
    console.log("error");
  }
});
