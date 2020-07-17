// prettier-ignore
const storyTree = [
  {
    category: "Display",
    components: [
      "Avatar",
      "Counter",
      "Heading",
      "Icon",
      "Pill",
    ],
  },
  {
    category: "Table",
    components: [
      "ActionBar",
      "DataGrid",
    ],
  },
  {
    category: "Buttons",
    components: [
      "Button",
      "ButtonGroup",
      "DropdownMenu",
      "DialogActions",
      "ExternalLink",
      "RawButton",
    ],
  },
  {
    category: "Forms",
    components: [
      "Calendar",
      "Checkbox",
      "DateInput",
      "DatePicker",
      "FormElement",
      "Input",
      "ListBox",
      "ListBoxBrowser",
      "Radio",
      "Select",
      "Sortable",
      "Switch",
      "Textarea",
      "Uploader",
    ],
  },
  
  {
    category: "Messaging",
    components: [
      "Confirmation",
      "Popover",
      "Modal",
      "SidePanel",
      "Spinner",
      "Takeover",
      "Toast",
    ],
  },
  {
    category: "Navigation",
    components: [
      "Card",
      "Collapsible",
      "CollapsibleText",
      "CollapsibleChecklists",
      "ProgressAccordion",
      "Tabs",
    ],
  },
 
  {
    category: "Utilities",
    components: [
      "L10n",
      "ResizeDetector",
      "Guard",
      "Stylers",
    ],
  },
];

function getCategory(component) {
  return storyTree.find(catList => catList.components.includes(component)).category;
}

function getStoryName(component) {
  return `${getCategory(component)} | ${component}`;
}

function getStoryUrlPrefix(component) {
  return `${getCategory(component).toLowerCase()}-${component.toLowerCase()}`;
}

module.exports = {
  getCategory,
  getStoryName,
  getStoryUrlPrefix,
  storyTree,
};
