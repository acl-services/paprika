import React from "react";
import nanoid from "nanoid";
import { Filter } from "@paprika/navigation";

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
    id: nanoid(),
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

export default function MyFilter(props) {
  const { appliedNumber, filters, setFilters, columns, setOperator, operator, onApply } = props;

  function getDefaultFilter() {
    return {
      columnId: columns[0].id,
      rule: "IS",
      value: "",
      id: nanoid(),
    };
  }

  function handleFilterChange({ id: filterId, rule, value, columnId }) {
    let change;

    if (columnId) {
      const columnType = columns.find(column => column.id === columnId).type;
      if (columnType === "SINGLE_SELECT") {
        change = getLevelFilter();
      } else {
        change = {
          columnId,
          rule: Filter.rulesByType[columnType][0],
          value: initialValueByType[columnType],
          renderValueField: null,
        };
      }
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
  }

  const memorizedHandleChange = React.useCallback(handleFilterChange, [columns, setFilters]);

  function handleAddFilter() {
    setFilters(prevFilters => [...prevFilters, getDefaultFilter()]);
  }

  const memorizedAddFilter = React.useCallback(handleAddFilter, [columns, setFilters]);

  function handleDeleteFilter(deletedFilterId) {
    setFilters(prevFilters => [...prevFilters].filter(filter => filter.id !== deletedFilterId));
  }

  const memorizedDeleteFilter = React.useCallback(handleDeleteFilter, [setFilters]);

  function handleChangeOperator() {
    setOperator(prevOperator => (prevOperator === "AND" ? "OR" : "AND"));
  }

  const memorizedHandleChangeOperator = React.useCallback(handleChangeOperator, [setOperator]);

  return (
    <Filter
      appliedNumber={appliedNumber}
      columns={columns}
      onAddFilter={memorizedAddFilter}
      onApply={onApply}
      onChangeOperator={memorizedHandleChangeOperator}
      operator={operator}
    >
      {filters.map((filter, index) => (
        <Filter.Item
          key={filter.id}
          {...filter}
          onDelete={memorizedDeleteFilter}
          onChange={memorizedHandleChange}
          index={index}
        />
      ))}
    </Filter>
  );
}
