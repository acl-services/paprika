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
      "DataField",
      "DataGrid",
      "DataHeader",
      "Filter",
      "Table"
    ],
  },
  {
    category: "Buttons",
    components: [
      "Button",
      "ButtonGroup",
      "OverflowMenu",
      "DialogActions",
      "ExternalLink",
      "RawButton",
      "StatusTracker"
    ],
  },
  {
    category: "Forms",
    components: [
      "Calendar",
      "Checkbox",
      "CopyInput",
      "DateInput",
      "DatePicker",
      "DateRangePicker",
      "FormElement",
      "Input",
      "ListBox",
      "ListBoxBrowser",
      "ListBoxWithTags",
      "Radio",
      "Search",
      "Select",
      "Sortable",
      "Switch",
      "Textarea",
      "TimePicker",
      "Uploader",
    ],
  },

  {
    category: "Messaging",
    components: [
      "Confirmation",
      "Popover",
      "Modal",
      "NotificationCard",
      "ProgressBar",
      "Panel",
      "Spinner",
      "Takeover",
      "Toast",
    ],
  },
  {
    category: "Navigation",
    components: [
      "Breadcrumbs",
      "Card",
      "Collapsible",
      "CollapsibleCard",
      "CollapsibleText",
      "CollapsibleChecklists",
      "Pagination",
      "ProgressAccordion",
      "SideNavigation",
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
      "Tokens",
      "helpers",
      "DynamicHyperlinkTransformer",
      "MockEndpoints",
      "seducer"
    ],
  },
];

function getCategory(component) {
  return storyTree.find(catList => catList.components.includes(component)).category;
}

function getStoryName(component) {
  return `${getCategory(component)}/${component}`;
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
