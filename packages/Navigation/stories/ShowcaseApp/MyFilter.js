import React from "react";
import nanoid from "nanoid";
import { Filter } from "../../src";

const getDefaultFilter = () => {
  return {
    columnId: "goals",
    rule: "LESS_THAN",
    value: "0",
    filterId: nanoid(),
  };
};

const initialValueByType = {
  BOOLEAN: true,
  NUMBER: "",
  TEXT: "",
  DATE: "",
  SINGLE_SELECT: null,
};

const getLevelFilter = () => {
  return {
    columnId: "level",
    rule: "IS",
    value: null,
    filterId: nanoid(),
    renderValueField: () => {
      return (
        <select>
          <option value="low">low</option>
          <option value="mid">mid</option>
          <option value="high">high</option>
        </select>
      );
    },
  };
};

export default function MyFilter({ columns }) {
  const [filters, setFilters] = React.useState([]);
  const [operator, setOperator] = React.useState("AND");

  function handleFilterChange({ filter, rule, value, columnId }) {
    let newFilter;

    if (columnId) {
      const columnType = columns.find(column => column.id === columnId).type;
      if (columnType === "SINGLE_SELECT") {
        newFilter = getLevelFilter();
      } else {
        newFilter = {
          ...filter,
          columnId,
          rule: Filter.rulesByType[columnType][0],
          value: initialValueByType[columnType],
          renderValueField: null,
        };
      }
    } else if (rule) {
      newFilter = {
        ...filter,
        rule,
        value: "",
      };
    } else {
      newFilter = {
        ...filter,
        value,
      };
    }
    setFilters(prevFilters =>
      prevFilters.map(filterItem => (filterItem.filterId === filter.filterId ? newFilter : filterItem))
    );
  }

  const memorizedHandleChange = React.useCallback(handleFilterChange, [columns, setFilters]);

  function handleAddFilter() {
    setFilters(prevFilters => [...prevFilters, getDefaultFilter()]);
  }

  const memorizedAddFilter = React.useCallback(handleAddFilter, [setFilters]);

  function handleDeleteFilter(deletedFilter) {
    setFilters(prevFilters => [...prevFilters].filter(filter => filter.filterId !== deletedFilter.filterId));
  }

  const memorizedDeleteFilter = React.useCallback(handleDeleteFilter, [setFilters]);

  function handleChangeOperator() {
    setOperator(prevOperator => (prevOperator === "AND" ? "OR" : "AND"));
  }

  const memorizedHandleChangeOperator = React.useCallback(handleChangeOperator, [setOperator]);

  return (
    <Filter
      onAddFilter={memorizedAddFilter}
      columns={columns}
      operator={operator}
      onChangeOperator={memorizedHandleChangeOperator}
    >
      {filters.map((filter, index) => (
        <Filter.Item
          key={filter.id}
          filter={filter}
          onDelete={memorizedDeleteFilter}
          onChange={memorizedHandleChange}
          index={index}
        />
      ))}
    </Filter>
  );
}
