import { logicalFilterOperators } from "../rules";
import isEqualityRule from "./isEqualityRule";

export default function isIllogicalRule(operator, rule, existingFilters, columnId, filterId = "") {
  return !(
    operator === logicalFilterOperators.AND &&
    isEqualityRule(rule) &&
    existingFilters.find(filter => filter.columnId === columnId && filter.id !== filterId)
  );
}
