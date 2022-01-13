import React from "react";
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
  {
    id: "hairColour",
    type: Filter.types.columnTypes.MULTI_SELECT,
    label: "Hair Colour",
  },
];

const orderedColumnIds = ["goals", "name", "status", "country", "joined", "shareable", "position", "hairColour"];

export default function App() {
  /**
   * columns, required
    data, optional, do not pass in if you want to implement the filter algorithm, see the example in packages/Filter/stories/MockServerFilter/App.js
    rulesByType, optional
    reducer, optional
    initialState, optional
   */
  // Note: if any of the `columnSettings` types are SINGLE_SELECT or MULTI_SELECT all of the options to populate those dropdowns
  // must be passed into Filter component's "data" prop (typically you'd fetch all the options from the server, use them to
  // generate a `structuredData` array, and pass that in)
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
    <>
      <Filter {...getFilterProps()} columns={columnsSettings} data={data} maxFiltersAllowed={5}>
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
              {orderedColumnIds.map(columnId => {
                switch (columnId) {
                  case "position": // SINGLE_SELECT
                  case "hairColour": // MULTI_SELECT
                    return <td key={columnId}>{item[columnId].label}</td>;
                  default:
                    return <td key={columnId}>{`${item[columnId]}`}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
