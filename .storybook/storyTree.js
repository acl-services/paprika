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
  let found;
  storyTree.forEach(catList => {
    if (catList.components.includes(component)) found = catList.category;
  });
  return found;
}

module.exports = {
  getCategory,
  getStoryName,
  storyTree,
};
