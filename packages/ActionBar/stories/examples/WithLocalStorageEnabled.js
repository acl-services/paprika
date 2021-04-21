import React from "react";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import ActionBar, { ColumnsArrangement, useColumnsArrangement } from "../../src";
import data from "../ShowcaseApp/data";

const columnsSettings = [
  {
    id: "goals",
    type: ActionBar.types.columnTypes.NUMBER,
    label: "Goals",
  },
  {
    id: "name",
    type: ActionBar.types.columnTypes.TEXT,
    label: "Name",
  },
  {
    id: "status",
    type: ActionBar.types.columnTypes.TEXT,
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joined",
    type: ActionBar.types.columnTypes.DATE,
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: ActionBar.types.columnTypes.BOOLEAN,
    label: "Shareable",
  },
  {
    id: "level",
    type: "CUSTOM_SELECT",
    label: "Level",
  },
  {
    id: "position",
    type: ActionBar.types.columnTypes.SINGLE_SELECT,
    label: "Position",
  },
];

export default function WithLocalStorageEnabled() {
  const { orderedColumnIds, isColumnHidden, ...handlers } = useColumnsArrangement({
    defaultOrderedColumnIds: ["name", "goals", "status", "country", "joined", "shareable", "level", "position"],
    localStoragePrefix: "paprika-storybook-example",
    disabledColumnIds: ["name"],
  });

  return (
    <Story>
      <Heading level={2}>ActionBar with Custom Button</Heading>
      <Tagline>
        If you want to save user show/hide preferences in localStorage, you can pass <code>localStoragePrefix</code>{" "}
        while using <code>useColumnsArrangement</code>
      </Tagline>
      <br />
      <ActionBar>
        <ColumnsArrangement orderedColumnIds={orderedColumnIds} {...handlers}>
          {columnsSettings.map(column => (
            <ColumnsArrangement.ColumnDefinition
              key={column.id}
              id={column.id}
              label={column.label}
              isHidden={isColumnHidden(column.id)}
              isDisabled={column.id === "name"}
            />
          ))}
        </ColumnsArrangement>
      </ActionBar>

      <table>
        <thead>
          <tr>
            <th>id</th>
            {orderedColumnIds.map(id => (isColumnHidden(id) ? null : <th key={id}>{id}</th>))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              {orderedColumnIds.map(id => (isColumnHidden(id) ? null : <td key={id}>{`${item[id]}`}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </Story>
  );
}
