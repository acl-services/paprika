import filterTesters from "./filterTesters";

export default function getSubset({ sortedFields, filters, source, columns }) {
  let sortedData = [];
  let filteredData = [];

  if (filters.length === 0 && sortedFields.length === 0) return source;
  // if (sortColumn && sortDirection) {
  //   sortedData = sort({
  //     data,
  //     columnId: sortColumn,
  //     direction: sortDirection,
  //     columnType:
  //       columns[sortColumn].type || (typeof data[0][sortColumn] === "number" ? columnTypes.NUMBER : columnTypes.TEXT),
  //     momentParsingFormat: columns[sortColumn].momentParsingFormat,
  //   });
  // }
  if (filters.length > 0) {
    filteredData = source.filter(row => {
      // checking if filter.rule exist, will removed after having all the rules
      const tester = filter => {
        // console.log(filter.rule, filterTesters[filter.rule]);
        return filter.rule
          ? filterTesters[filter.rule](
              row[filter.columnId],
              filter.value,
              columns.find(column => filter.columnId === column.id)
            )
          : true;
      };
      return filters.every(tester);
    });
  }
  // if (sortedData.length > 0 && filteredData.length > 0)
  //   return sortedData.filter(row => filteredData.find(filteredRow => row[keygen] === filteredRow[keygen]));
  return filters.length > 0 ? filteredData : sortedData;
}
