import React from "react";
import nanoid from "nanoid";
import { Filter } from "@paprika/action-bar";
import testers from "./testers";

const initialValueByType = {
  BOOLEAN: true,
  NUMBER: "",
  TEXT: "",
  DATE: "",
  SINGLE_SELECT: null,
};

function filterData({ filters, operator, columns, data }) {
  if (filters.length === 0) return data;

  return data.filter(row => {
    // checking if filter.rule exist, will removed after having all the rules

    const tester = filter => {
      return filter.rule
        ? testers[filter.rule](
            row[filter.columnId],
            filter.value,
            columns.find(column => filter.columnId === column.id)
          )
        : true;
    };
    return operator === "AND" ? filters.every(tester) : filters.some(tester);
  });
}

export default function useFilters({ columns, data, setNext = () => {} }) {
  const [filters, setFilters] = React.useState([]);
  const [operator, setOperator] = React.useState("AND");
  const [filteredData, setFilteredData] = React.useState(data);
  const [appliedNumber, setAppliedNumber] = React.useState(0);

  const handleFilterChange = React.useCallback(
    ({ id: filterId, rule, value, columnId }) => {
      let change;

      if (columnId) {
        const columnType = columns.find(column => column.id === columnId).type;

        change = {
          columnId,
          rule: Filter.rulesByType[columnType][0],
          value: initialValueByType[columnType],
          renderValueField: null,
        };
      } else if (rule) {
        change = {
          rule,
          value: "",
        };
      } else {
        change = {
          value,
        };
      }

      setFilters(prevFilters =>
        prevFilters.map(filterItem => (filterItem.id === filterId ? { ...filterItem, ...change } : filterItem))
      );
    },
    [columns]
  );

  function getDefaultFilter() {
    const firstColumnId = columns[0].id;
    const firstColumnType = columns.find(column => column.id === firstColumnId).type;

    return {
      columnId: firstColumnId,
      rule: Filter.rulesByType[firstColumnType][0],
      value: initialValueByType[firstColumnType],
      id: nanoid(),
    };
  }

  function handleAddFilter() {
    setFilters(prevFilters => [...prevFilters, getDefaultFilter()]);
  }

  function handleDeleteFilter(deletedFilterId) {
    setFilters(prevFilters => [...prevFilters].filter(filter => filter.id !== deletedFilterId));
  }

  function handleChangeOperator() {
    setOperator(prevOperator => (prevOperator === "AND" ? "OR" : "AND"));
  }

  function handleApply() {
    setFilteredData(() => filterData({ filters, operator, columns, data }));
    setAppliedNumber(filters.length);
    setNext(prev => prev && prev + 1);
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
