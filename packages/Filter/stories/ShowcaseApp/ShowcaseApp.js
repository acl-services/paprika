import React from "react";
import Heading from "@paprika/heading";
import Filter, { useFilter } from "../../src";
import data from "./data";

const columnsSettings = [
  {
    id: "goals",
    type: Filter.types.columnTypes.NUMBER,
    label: "Goals",
  },
  {
    id: "name",
    type: Filter.types.columnTypes.TEXT,
    label: "Name",
  },
  {
    id: "status",
    type: Filter.types.columnTypes.TEXT,
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joined",
    type: Filter.types.columnTypes.DATE,
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: Filter.types.columnTypes.BOOLEAN,
    label: "Shareable",
  },
  {
    id: "position",
    type: Filter.types.columnTypes.SINGLE_SELECT,
    label: "Position",
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
  const { filters, filteredData, getFilterProps, getFilterItemProps } = useFilter({
    columns: columnsSettings,
    data,
    /** This is optional if the filter panel is empty by default. */
    initialState: {
      filteredData: [data[1]],
      numberApplied: 1,
      filters: [
        {
          id: 1,
          columnId: "name",
          rule: "IS",
          value: "Romário",
        },
      ],
    },
  });

  return (
    <React.Fragment>
      <Heading level={2}>Filter showcase</Heading>
      <div>Click the trigger below to update filters.</div>

      <Filter {...getFilterProps()} columns={columnsSettings} data={data}>
        {filters.map((filter, index) => (
          <Filter.Item
            {...getFilterItemProps()}
            columnId={filter.columnId}
            id={filter.id}
            index={index}
            key={filter.id}
            type={filter.type}
            rule={filter.rule}
            value={filter.value}
          />
        ))}
      </Filter>

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
          {filteredData.map(item => (
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
