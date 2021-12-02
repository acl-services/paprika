import comparatorIsBinary from "./comparatorIsBinary";

function putFiltersWithBinaryComparatorsLast(filterOne, filterTwo) {
  const oneIsBinary = comparatorIsBinary(filterOne.rule);
  const twoIsBinary = comparatorIsBinary(filterTwo.rule);

  if (oneIsBinary === twoIsBinary) {
    return 0;
  }

  return oneIsBinary ? 1 : -1;
}

// Get the illogical filters (those filters that use a binary comparator filter, when there are other filters on that column)
export default function getIllogicalFilters(filters) {
  const filtersClone = [...filters];
  const processedColumnIds = [];

  return filtersClone.sort(putFiltersWithBinaryComparatorsLast).filter(filter => {
    if (processedColumnIds.includes(filter.columnId)) {
      if (comparatorIsBinary(filter.rule)) {
        return true;
      }
    } else {
      processedColumnIds.push(filter.columnId);
    }

    return false;
  });
}
