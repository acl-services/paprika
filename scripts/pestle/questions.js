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
    {
      type: "checkbox",
      name: "componentFiles",
      message: "Include which of the following files/folders?",
      choices: [
        {
          name: "/stories",
          checked: true,
        },
        {
          name: "/tests",
          checked: true,
        },
        {
          name: "/components",
          checked: true,
        },
      ],
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
        name: "testType",
        message: "Include ...",
        choices: [choices.jest, choices.cypress]
      },
    ],
    selectStoryType: [
      {
       type: "checkbox",
       name: "storyType",
       message: "Include ...",
       choices: [choices.showcaseStory, choices.screenerStory, choices.simpleStory] 
      }
    ],
    simpleStoryName: [
      {
        type: "input",
        name: "storyName",
        message: "Enter the simple story name ...",
      }
    ]
  },
};
