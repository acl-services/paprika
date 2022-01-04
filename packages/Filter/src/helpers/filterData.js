import Filter from "../Filter";
import testers from "./testers";
import { logicalFilterOperators } from "../rules";

export default function filterData({ filters, operator, columns, data }) {
  if (filters.length === 0) {
    return data;
  }

  return data.filter(row => {
    function tester(filter) {
      if (!filter.rule) {
        return true;
      }

      const column = columns.find(column => column.id === filter.columnId);
      const tester = testers[filter.rule];

      switch (column.type) {
        case Filter.types.columnTypes.SINGLE_SELECT:
        case Filter.types.columnTypes.MULTI_SELECT:
          return tester(row[filter.columnId].id, filter.value);
        default:
          return tester(row[filter.columnId], filter.value, column);
      }
    }

    return operator === logicalFilterOperators.AND ? filters.every(tester) : filters.some(tester);
  });
}
