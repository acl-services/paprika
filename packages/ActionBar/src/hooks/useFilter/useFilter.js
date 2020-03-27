/* eslint-disable no-param-reassign */
import React from "react";
import nanoid from "nanoid";
import produce from "immer";
import Filter from "../../components/Filter";
import testers from "./testers";
import { logicalFilterOperators } from "../../constants";

const initialValueByType = {
  BOOLEAN: true,
  NUMBER: "",
  TEXT: "",
  DATE: "",
};

function filterData({ filters, operator, columns, data }) {
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

export default function useFilter({ columns, data = null, rulesByType = Filter.defaultRulesByType }) {
  const [filters, setFilters] = React.useState([]);
  const [operator, setOperator] = React.useState(logicalFilterOperators.AND);
  const [filteredData, setFilteredData] = React.useState(data);
  const [appliedNumber, setAppliedNumber] = React.useState(0);

  const handleFilterChange = React.useCallback(
    ({ id: filterId, rule, value, columnId }) => {
      setFilters(
        produce(draftFilters => {
          draftFilters.forEach(filterItem => {
            if (filterItem.id !== filterId) return;

            if (columnId) {
              const columnType = columns.find(column => column.id === columnId).type;
              filterItem.columnId = columnId;
              filterItem.rule = rulesByType[columnType][0];
              filterItem.value = initialValueByType[columnType];
              filterItem.renderValueField = null;
            } else if (rule) {
              filterItem.rule = rule;
              filterItem.value = "";
            } else {
              filterItem.value = value;
            }
          });
        })
      );
    },
    [columns, rulesByType]
  );

  function getDefaultFilter() {
    const firstColumnId = columns[0].id;
    const firstColumnType = columns.find(column => column.id === firstColumnId).type;

    return {
      columnId: firstColumnId,
      rule: rulesByType[firstColumnType][0],
      value: initialValueByType[firstColumnType],
      id: nanoid(),
    };
  }

  function handleAddFilter() {
    setFilters(
      produce(draftFilters => {
        draftFilters.push(getDefaultFilter());
      })
    );
  }

  function handleDeleteFilter(deletedFilterId) {
    setFilters(prevFilters => [...prevFilters].filter(filter => filter.id !== deletedFilterId));
  }

  function handleChangeOperator() {
    setOperator(prevOperator =>
      prevOperator === logicalFilterOperators.AND ? logicalFilterOperators.OR : logicalFilterOperators.AND
    );
  }

  function handleApply() {
    setAppliedNumber(filters.length);
    if (data === null) return;
    setFilteredData(() => filterData({ filters, operator, columns, data }));
  }

  return {
    appliedNumberOfFilters: appliedNumber,
    filters,
    onAddFilter: handleAddFilter,
    onChangeOperator: handleChangeOperator,
    onDeleteFilter: handleDeleteFilter,
    onFilterChange: handleFilterChange,
    operator,
    onApply: handleApply,
    filteredData,
  };
}
