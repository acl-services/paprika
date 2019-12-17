import React from "react";
import { useDataTableState } from "../context";
import sort from "../helpers/sort";
import filterTesters from "../helpers/filterTesters";
import { logicalFilterOperators, columnTypes } from "../constants";

export default function useData() {
  const {
    isControlled,
    data,
    columns,
    filters,
    sortColumn,
    sortDirection,
    keygen,
    logicalFilterOperator,
  } = useDataTableState();
  let sortedData = [];
  let filteredData = [];

  function calculateResult() {
    if (isControlled) return data;
    if (sortColumn && sortDirection) {
      sortedData = sort({
        data,
        columnId: sortColumn,
        direction: sortDirection,
        columnType:
          columns[sortColumn].type || (typeof data[0][sortColumn] === "number" ? columnTypes.NUMBER : columnTypes.TEXT),
        momentParsingFormat: columns[sortColumn].momentParsingFormat,
      });
    }

    if (filters.length > 0) {
      filteredData = data.filter(row => {
        // checking if filter.rule exist, will removed after having all the rules
        const tester = filter =>
          filter.rule ? filterTesters[filter.rule](row[filter.columnId], filter.value, columns[filter.columnId]) : true;

        switch (logicalFilterOperator) {
          case logicalFilterOperators.AND:
            return filters.every(tester);
          case logicalFilterOperators.OR:
            return filters.some(tester);
          default:
            return true;
        }
      });
    }

    if (sortedData.length === 0 && filters.length === 0) return data;

    if (sortedData.length > 0 && filteredData.length > 0)
      return sortedData.filter(row => filteredData.find(filteredRow => row[keygen] === filteredRow[keygen]));

    return filters.length > 0 ? filteredData : sortedData;
  }

  const result = React.useMemo(calculateResult, [
    data,
    columns,
    filters,
    sortColumn,
    sortDirection,
    keygen,
    logicalFilterOperator,
  ]);

  return result;
}
