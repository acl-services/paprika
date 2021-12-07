import { logicalFilterOperators } from "../rules";
import ruleIsBoolean from "./ruleIsBoolean";

export default function isIllogicalRule(operator, rule, existingFilters, columnId, filterId = "") {
  return !(
    operator === logicalFilterOperators.AND &&
    ruleIsBoolean(rule) &&
    existingFilters.find(filter => filter.columnId === columnId && filter.id !== filterId)
  );
}
