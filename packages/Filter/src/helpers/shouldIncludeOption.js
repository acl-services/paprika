import { logicalFilterOperators } from "../rules";
import comparatorIsBinary from "./comparatorIsBinary";

export default function shouldIncludeOption(operator, option, allAddedFilters, thisFiltersIndex) {
  if (!alreadyFilteringByThisOption(option, allAddedFilters)) {
    return true;
  }

  if (doingOrComparison(operator)) {
    return true;
  }

  if (!doingBinaryComparison(option, allAddedFilters)) {
    return true;
  }

  if (lookingAtSelf(option, allAddedFilters, thisFiltersIndex)) {
    return true;
  }

  return false;
}

function getThisOptionsIndexInAppliedFilters(option, allAddedFilters) {
  return allAddedFilters.findIndex(appliedFilter => appliedFilter.columnId === option.id);
}

// look to see if they are filtering by this option already
function alreadyFilteringByThisOption(option, allAddedFilters) {
  return getThisOptionsIndexInAppliedFilters(option, allAddedFilters) > -1;
}

// if they are doing an "OR", include this column so they could apply another filter to it
function doingOrComparison(operator) {
  return operator === logicalFilterOperators.OR;
}

// if it is not being used with a "binary" comparison, it is ok to add it (i.e. filter on it again)
// for example, it is ok to search for 'goals >= 100 and goals < 200' (< and >= are not "binary")
// but it is not ok to search for 'goals = 100 and goals = 200' (= is "binary")
function doingBinaryComparison(option, allAddedFilters) {
  const index = getThisOptionsIndexInAppliedFilters(option, allAddedFilters);
  return comparatorIsBinary(allAddedFilters[index].rule);
}

// if the current ListBox option we are examining is used by the current Filter Item we are looping over, it is ok to add it (i.e. include it as a ListBox.Option)
function lookingAtSelf(option, allAddedFilters, thisFiltersIndex) {
  const thisOptionsIndex = getThisOptionsIndexInAppliedFilters(option, allAddedFilters);
  return thisOptionsIndex === thisFiltersIndex;
}
