const rules = {
  IS: "IS",
  IS_NOT: "IS_NOT",
  CONTAINS: "CONTAINS",
  DOES_NOT_CONTAIN: "DOES_NOT_CONTAIN",
  IS_BLANK: "IS_BLANK",
  IS_NOT_BLANK: "IS_NOT_BLANK",
};

export const rulesByType = {
  DATE: [],
  NUMBER: [],
  TEXT: [rules.IS, rules.IS_NOT, rules.CONTAINS, rules.DOES_NOT_CONTAIN, rules.IS_BLANK, rules.IS_NOT_BLANK],
};

export default rules;
