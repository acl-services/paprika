import React from "react";
import { Filter, useFilter } from "../../src";

const rulesByType = {
  ...Filter.defaultRulesByType,
  SINGLE_SELECT: [Filter.rules.IS, Filter.rules.IS_NOT, Filter.rules.IS_EMPTY, Filter.rules.IS_NOT_EMPTY],
};

const levelFilter = () => {
  return (
    <select>
      <option value="low">low</option>
      <option value="mid">mid</option>
      <option value="high">high</option>
    </select>
  );
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
  } = useFilter({ columns, rulesByType });

  const handleDeleteFilter = filterId => () => {
    onDeleteFilter(filterId);
  };
  const handleChangeFilter = filterId => params => {
    onFilterChange({ ...params, id: filterId });
  };

  return (
    <Filter
      appliedNumber={appliedNumberOfFilters}
      columns={columns}
      onAddFilter={onAddFilter}
      onApply={onApply}
      onChangeOperator={onChangeOperator}
      operator={operator}
      rulesByType={rulesByType}
    >
      {filters.map((filter, index) => (
        <Filter.Item
          key={filter.id}
          {...filter}
          index={index}
          onChange={handleChangeFilter(filter.id)}
          onDelete={handleDeleteFilter(filter.id)}
          renderValueField={filter.columnId === "level" ? levelFilter : null}
        />
      ))}
    </Filter>
  );
}
