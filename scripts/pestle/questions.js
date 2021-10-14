const shell = require("shelljs");
const choices = require("./choices");

module.exports = {
  newOrExistingComponent: [
    {
      type: "list",
      name: "newOrExistingComponent",
      message: "Please select an option",
      choices: [choices.createNewComponent, choices.addToExistingComponent],
    },
  ],
  createNewComponent: [
    {
      type: "input",
      name: "componentName",
      message: "What is the name of the new component?",
      validate(componentName) {
        if ( !/[A-Z]/.test( componentName[0]) || /\s/g.test(componentName) ){
          return "Please enter the component name using Camel case or Pascal case.";
        }
        return true;
      }
    },
    {
      type: "input",
      name: "componentDescription",
      message: "What is the description of the new component?",
      validate(description) {
        if (description.length < 20) {
          return "Please enter a description that is at least 20 characters long.";
        }
        return true;
      },
    },
  ],
  addToExistingComponent: {
    selectExistingComponent: [
      {
        type: "search-list",
        name: "componentName",
        message: "Which component are you adding to?",
        choices: shell.ls("packages"),
      },
      {
        type: "list",
        name: "fileType",
        message: "What are you adding?",
        choices: [choices.addTests, choices.addStories],
      },
    ],
    selectTestType: [
      {
        type: "checkbox",
        name: "testTypes",
        message: "Include ...",
        choices: [choices.jest, choices.cypress]
      },
    ],
    selectStoryType: [
      {
       type: "checkbox",
       name: "storyTypes",
       message: "Include ...",
       choices: [choices.showcaseStory, choices.screenerStory, choices.variationStory, choices.mdxStory, choices.exampleStory] 
      }
    ],
    exampleStoryName: [
      {
        type: "input",
        name: "storyName",
        message: "Enter the example story name ...",
        validate(storyName) {
          if ( !/[A-Z]/.test( storyName[0]) || /\s/g.test(storyName) ){
            return "Please enter the example story name using Camel case or Pascal case.";
          }
          return true;
        }
      }
    ]
  },
};
