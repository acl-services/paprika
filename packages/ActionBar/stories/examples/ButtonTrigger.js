import React from "react";
import Heading from "@paprika/heading";
import { Story } from "storybook/assets/styles/common.styles";
import ActionBar, { ColumnsArrangement, useColumnsArrangement } from "../../src";
import data from "../ShowcaseApp/data";

const columnsSettings = [
  {
    id: "goals",
    type: ActionBar.columnTypes.NUMBER,
    label: "Goals",
  },
  {
    id: "name",
    type: ActionBar.columnTypes.TEXT,
    label: "Name",
  },
  {
    id: "status",
    type: ActionBar.columnTypes.TEXT,
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joined",
    type: ActionBar.columnTypes.DATE,
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: ActionBar.columnTypes.BOOLEAN,
    label: "Shareable",
  },
  {
    id: "level",
    type: "CUSTOM_SELECT",
    label: "Level",
  },
  {
    id: "position",
    type: ActionBar.columnTypes.SINGLE_SELECT,
    label: "Position",
  },
];

export default function ButtonTrigger() {
  const { orderedColumnIds, isColumnHidden, ...handlers } = useColumnsArrangement([
    "goals",
    "name",
    "status",
    "country",
    "joined",
    "shareable",
    "level",
    "position",
  ]);
  return (
    <Story>
      <Heading level={2}>Columns Arrangement - Button Trigger</Heading>

      <ActionBar>
        <ColumnsArrangement orderedColumnIds={orderedColumnIds} {...handlers} hasButtonTrigger>
          <ColumnsArrangement.ColumnTrigger />
          {columnsSettings.map(column => (
            <ColumnsArrangement.ColumnDefinition
              id={column.id}
              label={column.label}
              isHidden={isColumnHidden(column.id)}
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
