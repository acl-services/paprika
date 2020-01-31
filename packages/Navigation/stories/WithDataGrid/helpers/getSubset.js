import isEqual from "lodash";
import filterTesters from "./filterTesters";
import sort from "./sort";

export default function getSubset({ sortedFields, filters, source, columns, operator }) {
  let sortedData = [];
  let filteredData = [];

  if (filters.length === 0 && sortedFields.length === 0) return source;

  if (sortedFields.length > 0) {
    sortedFields.forEach(field => {
      sortedData = sort({
        data: source,
        columnId: field.columnId,
        direction: field.direction,
        columnType: columns.find(column => field.columnId === column.id).type,
        momentParsingFormat: columns.find(column => field.columnId === column.id).momentParsingFormat,
      });
    });
  }
  if (filters.length > 0) {
    filteredData = source.filter(row => {
      // checking if filter.rule exist, will removed after having all the rules

      const tester = filter => {
        return filter.rule
          ? filterTesters[filter.rule](
              row[filter.columnId],
              filter.value,
              columns.find(column => filter.columnId === column.id)
            )
          : true;
      };
      return operator === "AND" ? filters.every(tester) : filters.some(tester);
    });
  }
  if (sortedData.length > 0 && filteredData.length > 0) {
    return sortedData.filter(item => filteredData.find(filteredItem => isEqual(filteredItem, item)));
  }
  return filters.length > 0 ? filteredData : sortedData;
}
