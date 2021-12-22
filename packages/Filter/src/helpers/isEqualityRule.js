import rules from "../rules";

const equalityRules = [rules.IS, rules.IS_BLANK, rules.EQUALS, rules.IS_EMPTY];

const inequalityRules = [rules.IS_NOT, rules.IS_NOT_BLANK, rules.NOT_EQUAL_TO, rules.IS_NOT_EMPTY];

export default function isEqualityRule(rule) {
  return equalityRules.includes(rule) || inequalityRules.includes(rule);
}
