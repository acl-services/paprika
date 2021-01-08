import React from "react";
import Heading from "@paprika/heading";
import Filters, { useFilters } from "../../src";
import data from "./data";

const columnsSettings = [
  {
    id: "goals",
    type: Filters.types.columnTypes.NUMBER,
    label: "Goals",
  },
  {
    id: "name",
    type: Filters.types.columnTypes.TEXT,
    label: "Name",
  },
  {
    id: "status",
    type: Filters.types.columnTypes.TEXT,
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joined",
    type: Filters.types.columnTypes.DATE,
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: Filters.types.columnTypes.BOOLEAN,
    label: "Shareable",
  },
  {
    id: "position",
    type: Filters.types.columnTypes.SINGLE_SELECT,
    label: "Position",
  },
];

const orderedColumnIds = ["goals", "name", "status", "country", "joined", "shareable", "position"];

export default function App() {
  /**
   * columns, required
    data, optional, do not pass in if you want to implement the filter algorithm, see the example in packages/Filters/stories/MockServerFilter/App.js
    rulesByType, optional
    reducer, optional
    initialState, optional
   */
  const { filters, filteredData, getFiltersProps, getFilterItemProps } = useFilters({
    columns: columnsSettings,
    data,
  });

  return (
    <React.Fragment>
      <Heading level={2}>Filters showcase</Heading>

      <Filters {...getFiltersProps()} columns={columnsSettings} data={data}>
        {filters.map((filter, index) => (
          <Filters.Item
            {...getFilterItemProps()}
            columnId={filter.columnId}
            id={filter.id}
            index={index}
            key={filter.id}
            label={filter.label}
            type={filter.type}
            rule={filter.rule}
            value={filter.value}
          />
        ))}
      </Filters>

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
