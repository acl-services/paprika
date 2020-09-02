import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import Heading from "@paprika/heading";
import Button from "@paprika/button/lib/Button";
import HideIcon from "@paprika/icon/lib/Hide";
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
        <ColumnsArrangement
          orderedColumnIds={orderedColumnIds}
          {...handlers}
          renderTriggerButton={(handler, attributes, isOpen, hiddenColumnCount) => {
            const label = hiddenColumnCount > 0 ? `${hiddenColumnCount} Hidden` : "Arrange";
            return (
              <Button {...attributes} onClick={handler} isOpen={isOpen}>
                <HideIcon style={{ marginRight: tokens.spaceSm }} />
                {label}
              </Button>
            );
          }}
        >
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
