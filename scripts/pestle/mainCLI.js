#!/usr/bin/env node
/* eslint-disable no-useless-catch */

// Inquirer
// eslint-disable-next-line import/no-extraneous-dependencies
const inquirer = require("inquirer");
// eslint-disable-next-line import/no-extraneous-dependencies
const search_list = require("inquirer-search-list");
const { pascalCase } = require("pascal-case");
const file = require("fs");
const questions = require("./questions");
const choices = require("./choices");

// Templates
const {
  renderPackageJSONTemplate,
  renderIndexTemplate,
  renderComponentTemplate,
  renderComponentStylesTemplate,
  renderReadMeTemplate,
} = require("./templates/componentTemplates");
const {
  renderStoryFolderTemplate,
  renderBackyardStoryFolderTemplate,
  renderExampleStoryFolderTemplate,
  renderExampleStoryTemplate,
  renderVariationStoryTemplate,
  addVariationTemplate,
  addExampleTemplate,
  renderShowcaseStoryTemplate,
  renderScreenerStoryTemplate,
  renderMXDFileTemplate,
} = require("./templates/storyTemplates");
const { renderSpecTemplate, renderCypressTemplate } = require("./templates/testTemplates");

// Helpers
const { createFile, appendToFile } = require("./helpers/createFile");
const { addToStoryTree } = require("./helpers/addToStoryTree");

inquirer.registerPrompt("search-list", search_list);

const addTestsInquiry = componentName => {
  inquirer.prompt(questions.addToExistingComponent.selectTestType).then(answers => {
    const path = `./packages/${componentName}/tests`;

    try {
      answers.testTypes.forEach(testFileType => {
        switch (testFileType) {
          case choices.jest:
            createFile(`${path}/spec/${componentName}.spec.js`, renderSpecTemplate({ componentName }));
            break;
          case choices.cypress:
            createFile(`${path}/cypress/${componentName}.cypress.js`, renderCypressTemplate({ componentName }));
            break;
          default:
          // do nothing
        }
      });
    } catch (err) {
      throw err;
    }
  });
};

const addStoriesInquiry = componentName => {
  inquirer.prompt(questions.addToExistingComponent.selectStoryType).then(answers => {
    const path = `./packages/${componentName}/stories`;

    try {
      // create component story file if it doesn't already exist
      const mainStoryPath = `${path}/${componentName}.stories.js`;
      if (!file.existsSync(mainStoryPath)) createFile(`${path}/${componentName}.stories.js`, renderStoryFolderTemplate({ componentName }));

      answers.storyTypes.forEach(storyFileType => {
        switch (storyFileType) {
          case choices.exampleStory:
            inquirer.prompt(questions.addToExistingComponent.exampleStoryName).then(answers => {
              const { storyName } = answers;
              const exampleStoryPath = `${path}/${componentName}.example.stories.js`;
              if (file.existsSync(exampleStoryPath)) appendToFile(exampleStoryPath, addExampleTemplate({ storyName }));
              else createFile(exampleStoryPath, renderExampleStoryFolderTemplate({ componentName, storyName }));
              createFile(
                `${path}/examples/${pascalCase(storyName)}.js`,
                renderExampleStoryTemplate({ componentName, storyName })
              );
            });
            break;
          case choices.showcaseStory:
            createFile(`${path}/examples/Showcase.js`, renderShowcaseStoryTemplate({ componentName }));
            break;
          case choices.variationStory:
            createFile(`${path}/examples/Variations.js`, renderVariationStoryTemplate({ componentName }));
            appendToFile(`${path}/${componentName}.stories.js`, addVariationTemplate({ componentName }));
            break;
          case choices.screenerStory:
            createFile(
              `${path}/${componentName}.backyard.stories.js`,
              renderBackyardStoryFolderTemplate({ componentName })
            );
            createFile(`${path}/tests/Screener.js`, renderScreenerStoryTemplate({ componentName }));
            break;
          case choices.mdxStory:
            createFile(`${path}/${componentName}.stories.mdx`, renderMXDFileTemplate({ componentName }));
            break;
          default:
          // do nothing
        }
      });
    } catch (err) {
      throw err;
    }
  });
};

const createNewComponentInquiry = () => {
  inquirer.prompt(questions.createNewComponent).then(answers => {
    let { componentName } = answers;
    const { componentDescription } = answers;
    componentName = pascalCase(componentName);
    const path = `./packages/${componentName}`;

    createFile(`${path}/package.json`, renderPackageJSONTemplate({ componentName, componentDescription }));
    createFile(`${path}/src/index.js`, renderIndexTemplate({ componentName }));
    createFile(`${path}/src/${componentName}.js`, renderComponentTemplate({ componentName }));
    createFile(`${path}/src/${componentName}.styles.js`, renderComponentStylesTemplate({ componentName }));
    createFile(`${path}/README.md`, renderReadMeTemplate());

    // tests
    createFile(`${path}/tests/spec/${componentName}.spec.js`, renderSpecTemplate({ componentName }));
    createFile(`${path}/tests/cypress/${componentName}.cypress.js`, renderCypressTemplate({ componentName }));

    // stories
    createFile(`${path}/stories/${componentName}.stories.mdx`, renderMXDFileTemplate({ componentName }));
    createFile(`${path}/stories/${componentName}.stories.js`, renderStoryFolderTemplate({ componentName }));
    createFile(`${path}/stories/examples/Showcase.js`, renderShowcaseStoryTemplate({ componentName }));
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

  if (newOrExistingComponent === choices.createNewComponent) {
    createNewComponentInquiry();
  } else if (newOrExistingComponent === choices.addToExistingComponent) {
    modifyExistingComponentInquiry();
  } else {
    console.log("error");
  }
});
