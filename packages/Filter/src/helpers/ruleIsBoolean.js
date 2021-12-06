import rules from "../rules";

export default function ruleIsBoolean(comparator) {
  return [
    rules.IS,
    rules.IS_NOT,
    rules.IS_BLANK,
    rules.IS_NOT_BLANK,
    rules.EQUALS,
    rules.NOT_EQUAL_TO,
    rules.IS_EMPTY,
    rules.IS_NOT_EMPTY,
  ].includes(comparator);
}
