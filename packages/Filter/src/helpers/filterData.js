import Filter from "../Filter";
import testers from "./testers";
import { logicalFilterOperators } from "../rules";

export default function filterData({ filters, operator, columns, data }) {
  if (filters.length === 0) return data;

  return data.filter(row => {
    function tester(filter) {
      if (filter.rule) {
        const columnType = columns.find(column => column.id === filter.columnId).type;
        switch (columnType) {
          case Filter.types.columnTypes.SINGLE_SELECT:
          case Filter.types.columnTypes.MULTI_SELECT:
            return testers[filter.rule](
              row[filter.columnId].id,
              filter.value.id,
              columns.find(column => filter.columnId === column.id)
            );
          default:
            return testers[filter.rule](
              row[filter.columnId],
              filter.value,
              columns.find(column => filter.columnId === column.id)
            );
        }
      }
      return true;
    }

    return operator === logicalFilterOperators.AND ? filters.every(tester) : filters.some(tester);
  });
}
