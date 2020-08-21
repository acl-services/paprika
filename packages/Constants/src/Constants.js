export const size = {
  AUTO: "auto",
  XSMALL: "xsmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  XLARGE: "xlarge",
};

export const colors = {
  BLACK: "black",
  BLUE: "blue",
  GREEN: "green",
  GREY: "grey",
  ORANGE: "orange",
  LIGHT_BLUE: "lightBlue",
  LIGHT_ORANGE: "lightOrange",
  RED: "red",
};

export const alignTypes = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
};

export const logicalFilterOperators = {
  AND: "and",
  OR: "or",
};

export const rules = {
  IS: "IS",
  IS_NOT: "IS_NOT",
  CONTAINS: "CONTAINS",
  DOES_NOT_CONTAIN: "DOES_NOT_CONTAIN",
  IS_BLANK: "IS_BLANK",
  IS_NOT_BLANK: "IS_NOT_BLANK",
  EQUALS: "EQUALS",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  LESS_THAN: "LESS_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  IS_EMPTY: "IS_EMPTY",
  IS_NOT_EMPTY: "IS_NOT_EMPTY",
  IS_BEFORE: "IS_BEFORE",
  IS_AFTER: "IS_AFTER",
};

export const defaultRulesByType = {
  DATE: [rules.IS, rules.IS_NOT, rules.IS_BEFORE, rules.IS_AFTER],
  NUMBER: [
    rules.EQUALS,
    rules.NOT_EQUAL_TO,
    rules.GREATER_THAN,
    rules.GREATER_THAN_OR_EQUAL_TO,
    rules.LESS_THAN,
    rules.LESS_THAN_OR_EQUAL_TO,
    rules.IS_EMPTY,
    rules.IS_NOT_EMPTY,
  ],
  TEXT: [rules.IS, rules.IS_NOT, rules.CONTAINS, rules.DOES_NOT_CONTAIN, rules.IS_BLANK, rules.IS_NOT_BLANK],
  BOOLEAN: [rules.IS],
  SINGLE_SELECT: [rules.IS, rules.IS_NOT, rules.IS_BLANK, rules.IS_NOT_BLANK],
};

export const localeKeysByRule = {
  [rules.IS]: "is",
  [rules.IS_NOT]: "is_not",
  [rules.CONTAINS]: "contains",
  [rules.DOES_NOT_CONTAIN]: "does_not_contain",
  [rules.IS_BLANK]: "is_blank",
  [rules.IS_NOT_BLANK]: "is_not_blank",
  [rules.EQUALS]: "equals",
  [rules.NOT_EQUAL_TO]: "not_equal_to",
  [rules.GREATER_THAN]: "greater_than",
  [rules.LESS_THAN]: "less_than",
  [rules.GREATER_THAN_OR_EQUAL_TO]: "greater_than_or_equal_to",
  [rules.LESS_THAN_OR_EQUAL_TO]: "less_than_or_equal_to",
  [rules.IS_EMPTY]: "is_empty",
  [rules.IS_NOT_EMPTY]: "is_not_empty",
  [rules.IS_BEFORE]: "is_before",
  [rules.IS_AFTER]: "is_after",
};

export const sortDirections = {
  ASCEND: "ASCEND",
  DESCEND: "DESCEND",
};

export const columnTypes = {
  TEXT: "TEXT",
  NUMBER: "NUMBER",
  DATE: "DATE",
  BOOLEAN: "BOOLEAN",
  SINGLE_SELECT: "SINGLE_SELECT",
};

export const localeTypeKeys = {
  [columnTypes.TEXT]: "text",
  [columnTypes.NUMBER]: "number",
  [columnTypes.DATE]: "date",
  [columnTypes.BOOLEAN]: "boolean",
  [columnTypes.SINGLE_SELECT]: "single_select",
};

export const changeTypes = {
  COLUMN: "COLUMN",
  DIRECTION: "DIRECTION",
  RULE: "RULE",
  FILTER_VALUE: "FILTER_VALUE",
};

export const buttonKinds = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DESTRUCTIVE: "destructive",
  FLAT: "flat",
  MINOR: "minor",
  LINK: "link",
};

export const keyTypes = {
  PREV: "ArrowLeft",
  NEXT: "ArrowRight",
  FIRST: "Home",
  LAST: "End",
};

export const checkboxStates = {
  CHECKED: "checked",
  UNCHECKED: "unchecked",
  INDETERMINATE: "indeterminate",
};

export const buttonTypes = {
  ICON: "icon",
  RAW: "raw",
  SIMPLE: "simple",
};

export const dataGridTypes = {
  GRID: "grid",
  NONE: "none",
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
};

export const inputValidTypes = {
  EMAIL: "email",
  NUMBER: "number",
  PASSWORD: "password",
  SEARCH: "search",
  TELEPHONE: "tel",
  TEXT: "text",
  URL: "url",
};

export const severityPillColors = {
  NO_RISK: "noRisk",
  LOW_RISK: "lowRisk",
  MEDIUM_RISK: "mediumRisk",
  HIGH_RISK: "highRisk",
};

export const sidePanelKinds = {
  DEFAULT: "default",
  CHILD: "child",
};

export const toastKinds = {
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  INFO: "info",
  LOCKED: "locked",
  VISUALLY_HIDDEN: "visually-hidden",
};
