import ruleIsBoolean from "./ruleIsBoolean";

function putFiltersWithBooleanRulesLast(filterOne, filterTwo) {
  const oneIsBinary = ruleIsBoolean(filterOne.rule);
  const twoIsBinary = ruleIsBoolean(filterTwo.rule);

  if (oneIsBinary === twoIsBinary) {
    return 0;
  }

  return oneIsBinary ? 1 : -1;
}

// Get the illogical filters (use a boolean rule, and there are other filters on that column)
export default function getIllogicalFilters(filters) {
  const filtersClone = [...filters];
  const processedColumnIds = [];

  return filtersClone.sort(putFiltersWithBooleanRulesLast).filter(filter => {
    if (processedColumnIds.includes(filter.columnId)) {
      if (ruleIsBoolean(filter.rule)) {
        return true;
      }
    } else {
      processedColumnIds.push(filter.columnId);
    }

    return false;
  });
}
