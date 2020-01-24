const rules = {
  IS: "is",
  IS_NOT: "is_not",
  CONTAINS: "contains",
  DOES_NOT_CONTAIN: "does_not_contain",
  IS_BLANK: "is_blank",
  IS_NOT_BLANK: "is_not_blank",
  EQUALS: "equals",
  NOT_EQUAL_TO: "not_equal_to",
  GREATER_THAN: "greater_than",
  LESS_THAN: "less_than",
  GREATER_THAN_OR_EQUAL_TO: "greater_than_or_equal_to",
  LESS_THAN_OR_EQUAL_TO: "less_than_or_equal_to",
  IS_EMPTY: "is_empty",
  IS_NOT_EMPTY: "is_not_empty",
  IS_BEFORE: "is_before",
  IS_AFTER: "is_after",
};

export const rulesByType = {
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
};

export default rules;
