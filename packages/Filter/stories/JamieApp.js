import React from "react";
import Filter from "../src";
// import data from "./data";

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

export default function App() {
  /**
   * columns, required
    data, optional, do not pass in if you want to implement the filter algorithm, see the example in packages/Filter/stories/MockServerFilter/App.js
    rulesByType, optional
    reducer, optional
    initialState, optional
   */
  // const { filters, filteredData, getFilterProps, getFilterItemProps } = useFilter({
  //   columns: columnsSettings,
  //   data: [],
  // });

  // return (
  //   <React.Fragment>
  //     <Filter {...getFilterProps()} columns={columnsSettings} data={[]}>
  //       {filters.map((filter, index) => (
  //         <Filter.Item
  //           {...getFilterItemProps()}
  //           columnId={filter.columnId}
  //           id={filter.id}
  //           index={index}
  //           key={filter.id}
  //           type={filter.type}
  //           rule={filter.rule}
  //           value={filter.value}
  //         />
  //       ))}
  //     </Filter>
  //     some output...
  //   </React.Fragment>
  // );

  return (
    <Filter
      columns={columnsSettings}
      data={[]}
      numberApplied={69}
      onAddFilter={() => {
        console.log("onAddFilter");
      }}
      onApply={() => {
        console.log("onApply");
      }}
      onCancel={() => {
        console.log("onCancel");
      }}
      onChangeOperator={() => {
        console.log("onChangeOperator");
      }}
      onClear={() => {}}
    >
      <Filter.Item
        columnId="name"
        id={12}
        index={0}
        type="TEXT"
        rule="CONTAINS"
        value="abc"
        onChangeFilter={(x, y) => {
          console.log("onChangeFilter", x, y);
        }}
        onRemoveFilter={(x, y) => {
          console.log("onRemoveFilter", x, y);
        }}
      />
      <Filter.Item
        columnId="goals"
        id={13}
        index={1}
        type="NUMBER"
        rule="EQUALS"
        value={24}
        onChangeFilter={(x, y) => {
          console.log("onChangeFilter", x, y);
        }}
        onRemoveFilter={(x, y) => {
          console.log("onRemoveFilter", x, y);
        }}
      />
    </Filter>
  );
}
