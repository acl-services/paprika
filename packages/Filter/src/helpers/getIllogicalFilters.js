import isEqualityRule from "./isEqualityRule";

function putFiltersWithEqualityRulesLast(filterA, filterB) {
  const aIsEqualityRule = isEqualityRule(filterA.rule);
  const bIsEqualityRule = isEqualityRule(filterB.rule);

  if (aIsEqualityRule === bIsEqualityRule) {
    return 0;
  }

  return aIsEqualityRule ? 1 : -1;
}

// Get the illogical filters (use a boolean rule, and there are other filters on that column)
export default function getIllogicalFilters(filters) {
  const filtersClone = [...filters];
  const processedColumnIds = [];

  return filtersClone.sort(putFiltersWithEqualityRulesLast).filter(filter => {
    if (processedColumnIds.includes(filter.columnId)) {
      if (isEqualityRule(filter.rule)) {
        return true;
      }
    } else {
      processedColumnIds.push(filter.columnId);
    }

    return false;
  });
}
