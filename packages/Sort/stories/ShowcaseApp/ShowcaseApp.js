import React from "react";
import Heading from "@paprika/heading";
import Sort, { useSort } from "../../src";
import data from "./data";

// type is not required
const columnsSettings = [
  {
    id: "id",
    type: Sort.types.columnTypes.NUMBER,
    label: "Id",
  },
  {
    id: "name",
    type: Sort.types.columnTypes.TEXT,
    label: "Name",
  },
  {
    id: "email",
    type: Sort.types.columnTypes.TEXT,
    label: "Email",
  },
  { id: "country", label: "Country", type: "TEXT" },
  { id: "goals", label: "Goals", type: "NUMBER" },
  {
    id: "joined",
    type: Sort.types.columnTypes.DATE,
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: Sort.types.columnTypes.BOOLEAN,
    label: "Shareable",
  },
];

const orderedColumnIds = ["goals", "name", "status", "country", "joined", "shareable", "position"];

export default function App() {
  /**
   * columns, required
    data, optional, do not pass in if you want to implement the filter algorithm, see the example in packages/Filter/stories/MockServerFilter/App.js
    rulesByType, optional
    reducer, optional
    initialState, optional
   */
  const { fields, sortedData, getSortProps, getFieldProps } = useSort({
    columns: columnsSettings,
    data,
    /** This is optional if the filter panel is empty by default. */
    initialState: {
      sortedData: data,
      numberApplied: 1,
      fields: [
        {
          id: 1,
          columnId: "id",
          direction: "ASCEND",
        },
      ],
    },
  });

  console.log("fields", fields);

  const field = {
    id: "1",
    columnId: "goals",
    direction: "ASCEND",
  };

  return (
    <React.Fragment>
      <Heading level={2}>Sort showcase</Heading>
      <div>Click the trigger below to update sort.</div>

      {/* numberApplied,
    children,
    columns,
    data,
    onAddSort,
    isAddSortDisabled,
    onApply,
    onCancel,
    onReset,
    zIndex, */}
      <Sort {...getSortProps()} columns={columnsSettings} data={data}>
        {fields.map((field, index) => (
          <Sort.Field
            {...getFieldProps()}
            columnId={field.columnId}
            id={field.id}
            index={index}
            key={field.id}
            direction={field.direction}
          />
        ))}
      </Sort>

      <table>
        <thead>
          <tr>
            <th>id</th>
            {orderedColumnIds.map(id => (
              <th key={id}>{id}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              {orderedColumnIds.map(id => (
                <td key={id}>{`${item[id]}`}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
