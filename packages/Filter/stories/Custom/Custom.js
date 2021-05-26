import React from "react";
import Filter, { useFilter } from "../../src";
import CustomSingleSelectFilter from "./CustomSingleSelectFilter";

const columnsSettings = [
  {
    id: "level",
    type: "CUSTOM_SELECT",
    label: "Level (custom field)",
  },
  {
    id: "name",
    type: Filter.types.columnTypes.TEXT,
    label: "Name",
  },
];

const customRulesByType = {
  ...Filter.defaultRulesByType,
  CUSTOM_SELECT: [Filter.rules.IS, Filter.rules.IS_EMPTY, Filter.rules.IS_NOT_EMPTY],
};

export default function FilterWithServer() {
  const { filters, getFilterProps, getFilterItemProps } = useFilter({
    columns: columnsSettings,
    rulesByType: customRulesByType,
  });
  const filterProps = getFilterProps();

  const renderLevelFilter = () => <CustomSingleSelectFilter />;

  return (
    <React.Fragment>
      <Filter {...filterProps} columns={columnsSettings} rulesByType={customRulesByType}>
        {filters.map((filter, index) => (
          <Filter.Item
            {...getFilterItemProps()}
            columnId={filter.columnId}
            id={filter.id}
            index={index}
            key={filter.id}
            renderValueField={filter.columnId === "level" ? renderLevelFilter : null}
            rule={filter.rule}
            type={filter.type}
            value={filter.value}
          />
        ))}
      </Filter>
      <p>You would render filtered results here...</p>
    </React.Fragment>
  );
}
