// prettier-ignore
const storyTree = [
  {
    category: "Basic",
    components: [
      "Spinner",
      "Heading",
      "Pill",
      "Counter",
      "Icon",
      "Avatar"
    ],
  },
  {
    category: "Content",
    components: [
      "Card",
      "Toast",
      "Tabs",
      "Collapsible",
      "CollapsibleText",
      "CollapsibleChecklists",
      "ProgressAccordion",
      "Sortable",
    ],
  },
  {
    category: "Layers",
    components: [
      "Popover",
      "SidePanel",
      "Modal",
      "Takeover",
    ],
  },
  {
    category: "Commands",
    components: [
      "RawButton",
      "Button",
      "DialogActions",
      "ExternalLink",
      "DropdownMenu",
      "Confirmation",
      "Switch",
      "ButtonGroup",
    ],
  },
  {
    category: "Forms",
    components: [
      "FormElement",
      "Input",
      "Select",
      "Textarea",
      "Checkbox",
      "Radio",
      "Uploader",
      "ListBox",
      "ListBoxBrowser",
      "DateInput",
      "DatePicker",
      "DateRangePicker",
      "Calendar",
    ],
  },
  {
    category: "Data Table",
    components: [
      "ActionBar",
      "DataGrid",
    ],
  },
  {
    category: "Utilities",
    components: [
      "L10n",
      "Guard",
      "Stylers",
    ],
  },
];

function getStoryName(component) {
  return `${getCategory(component)} | ${component}`;
}

function getCategory(component) {
  return storyTree.find(catList => catList.components.includes(component)).category;
}

module.exports = {
  getCategory,
  getStoryName,
  storyTree,
};
