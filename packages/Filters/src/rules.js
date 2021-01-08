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

export default rules;
