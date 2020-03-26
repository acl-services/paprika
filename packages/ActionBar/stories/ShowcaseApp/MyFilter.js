import React from "react";
import nanoid from "nanoid";
import { Filter, useFilter } from "../../src";

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

export default function MyFilter({ columns }) {
  const {
    appliedNumberOfFilters,
    filters,
    onAddFilter,
    onChangeOperator,
    onDeleteFilter,
    onFilterChange,
    operator,
    onApply,
  } = useFilter({ columns });

  return (
    <Filter
      appliedNumber={appliedNumberOfFilters}
      columns={columns}
      onAddFilter={onAddFilter}
      onApply={onApply}
      onChangeOperator={onChangeOperator}
      operator={operator}
    >
      {filters.map((filter, index) => (
        <Filter.Item
          key={filter.id}
          {...filter}
          onDelete={onDeleteFilter}
          onChange={onFilterChange}
          index={index}
          renderValueField={filter.columnId === "level" ? getLevelFilter : null}
        />
      ))}
    </Filter>
  );
}
