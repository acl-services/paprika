import testers from "./testers";
import { logicalFilterOperators } from "../rules";
import { columnTypes } from "../types";

export default function filterData({ filters, operator, columns, data }) {
  if (filters.length === 0) return data;
  if (!data) return data;

  return data.filter(row => {
    function tester(filter) {
      if (filter.rule) {
        const columnType = columns.find(column => column.id === filter.columnId).type;
        switch (columnType) {
          case columnTypes.SINGLE_SELECT:
          case columnTypes.MULTI_SELECT:
            return testers[filter.rule](row[filter.columnId].id, filter.value);
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
