import { logicalFilterOperators } from "../rules";
import comparatorIsBinary from "./comparatorIsBinary";

export default function removeIllogicalRules(operator, rule, existingFilters, columnId, filterId = "") {
  return !(
    operator === logicalFilterOperators.AND &&
    comparatorIsBinary(rule) &&
    existingFilters.find(filter => filter.columnId === columnId && filter.id !== filterId)
  );
}
