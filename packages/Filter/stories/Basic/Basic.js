import React from "react";
import Filter from "../../src";

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
  return (
    <>
      <Filter
        columns={columnsSettings}
        data={null}
        numberApplied={2}
        onAddFilter={() => {
          console.log("manually add a new Filter.Item child");
        }}
        onApply={() => {
          console.log("onApply");
        }}
        onCancel={() => {
          console.log("onCancel");
        }}
        onChangeOperator={operator => {
          console.log("onChangeOperator", operator);
        }}
        onClear={() => {}}
      >
        <Filter.Item
          columnId="name" // exists in `columnsSettings`
          id={12}
          index={0}
          type="TEXT"
          rule="CONTAINS"
          value="abc"
          onChangeFilter={(changeType, changedObj) => {
            console.log("onChangeFilter", changeType, changedObj);
          }}
          onDeleteFilter={id => {
            console.log("onDeleteFilter", id);
          }}
        />
        <Filter.Item
          columnId="goals"
          id={13}
          index={1}
          type="NUMBER"
          rule="EQUALS"
          value="33"
          onChangeFilter={(changeType, changedObj) => {
            console.log("onChangeFilter", changeType, changedObj);
          }}
          onDeleteFilter={id => {
            console.log("onDeleteFilter", id);
          }}
        />
      </Filter>
      <p>You would render filtered results here...</p>
    </>
  );
}
