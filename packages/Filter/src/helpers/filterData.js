import testers from "./testers";
import { logicalFilterOperators } from "../rules";

export default function filterData({ filters, operator, columns, data }) {
  if (filters.length === 0) return data;

  return data.filter(row => {
    const tester = filter => {
      return filter.rule
        ? testers[filter.rule](
            row[filter.columnId],
            filter.value,
            columns.find(column => filter.columnId === column.id)
          )
        : true;
    };
    return operator === logicalFilterOperators.AND ? filters.every(tester) : filters.some(tester);
  });
}
