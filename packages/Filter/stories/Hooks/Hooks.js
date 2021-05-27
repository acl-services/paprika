import React from "react";
import Filter, { useFilter } from "../../src";
import sampleData from "../Showcase/data";

const columnsSettings = [
  {
    id: "goals",
    type: Filter.types.columnTypes.NUMBER,
    label: "Goals (NUMBER)",
  },
  {
    id: "name",
    type: Filter.types.columnTypes.TEXT,
    label: "Name (TEXT)",
  },
  {
    id: "joined",
    type: Filter.types.columnTypes.DATE,
    label: "Joined by (DATE)",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: Filter.types.columnTypes.BOOLEAN,
    label: "Shareable (BOOLEAN)",
  },
  {
    id: "position",
    type: Filter.types.columnTypes.SINGLE_SELECT,
    label: "Position (SINGLE SELECT)",
  },
];

export default function Hooks() {
  const {
    filters,
    // filteredData,
    getFilterProps,
    getFilterItemProps,
  } = useFilter({
    columns: columnsSettings,
    data: sampleData,
    initialState: {
      filteredData: sampleData,
      numberApplied: 0,
      filters: [],
    },
    // reducer,
    // rulesByType
  });

  // const { numberApplied, onAddFilter, onChangeOperator, onClear, operator, onApply } = getFilterProps();
  const filterProps = getFilterProps();

  // const { onDeleteFilter, onChangeFilter } = getFilterItemProps();
  const filterItemProps = getFilterItemProps();

  return (
    <React.Fragment>
      <Filter
        {...filterProps}
        columns={columnsSettings}
        onCancel={() => {
          console.log("onCancel");
        }}
      >
        {filters.map((filter, index) => (
          <Filter.Item
            {...filterItemProps}
            columnId={filter.columnId}
            id={filter.id}
            index={index}
            key={filter.id}
            rule={filter.rule}
            type={filter.type}
            value={filter.value}
          />
        ))}
      </Filter>
      <p>You would render filtered results here via `filteredData`</p>
    </React.Fragment>
  );
}
