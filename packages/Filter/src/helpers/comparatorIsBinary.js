import rules from "../rules";

export default function comparatorIsBinary(comparator) {
  return [rules.IS, rules.IS_BLANK, rules.IS_NOT_BLANK, rules.EQUALS, rules.IS_EMPTY, rules.IS_NOT_EMPTY].includes(
    comparator
  );
}
