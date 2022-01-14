import React from "react";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import ActionBar, { ColumnsArrangement, SearchInput, Sort, useColumnsArrangement, useSort } from "../../src";
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

export default function CustomButton() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { sortedFields, sortedData, onDeleteSort, onChangeSort, ...sortProps } = useSort({
    columns: columnsSettings,
    data,
  });
  const { orderedColumnIds, isColumnHidden, ...handlers } = useColumnsArrangement({
    defaultOrderedColumnIds: ["goals", "name", "status", "country", "joined", "shareable", "level", "position"],
  });

  const [rowColor, setRowColor] = React.useState("");

  const changeRowColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgb(${r}, ${g}, ${b})`;
    setRowColor(color);
  };

  const subset = React.useMemo(
    () =>
      sortedData.filter(item =>
        searchTerm ? !!Object.values(item).find(value => new RegExp(`${searchTerm}`, "i").test(`${value}`)) : true
      ),
    [searchTerm, sortedData]
  );

  return (
    <Story>
      <Heading level={2}>ActionBar with Custom Button</Heading>
      <Tagline>
        If a user needs any functionality or feature that the Actionbar does not offer, the user has the ability to add
        their own buttons to the ActionBar component to meet those specific needs.
      </Tagline>
      <br />
      <ActionBar>
        <SearchInput
          initialValue={searchTerm}
          onChange={term => {
            setSearchTerm(term);
          }}
        />

        <Sort {...sortProps} columns={columnsSettings}>
          {sortedFields.map((field, index) => (
            <Sort.Field
              columnId={field.columnId}
              direction={field.direction}
              id={field.id}
              isFirst={index === 0}
              key={field.id}
              onChange={onChangeSort}
              onDelete={onDeleteSort}
            />
          ))}
        </Sort>

        <ColumnsArrangement orderedColumnIds={orderedColumnIds} {...handlers}>
          {columnsSettings.map(column => (
            <ColumnsArrangement.ColumnDefinition
              id={column.id}
              label={column.label}
              isHidden={isColumnHidden(column.id)}
            />
          ))}
        </ColumnsArrangement>
        <Button
          style={{ marginRight: "8px" }}
          kind={Button.types.kind.FLAT}
          onClick={() => {
            changeRowColor();
          }}
        >
          Change Color!
        </Button>
      </ActionBar>

      <table>
        <thead>
          <tr>
            <th>id</th>
            {orderedColumnIds.map(id => (isColumnHidden(id) ? null : <th key={id}>{id}</th>))}
          </tr>
        </thead>
        <tbody>
          {subset.map(item => (
            <tr key={item.id} style={{ backgroundColor: rowColor }}>
              <td>{item.id}</td>
              {orderedColumnIds.map(id => (isColumnHidden(id) ? null : <td key={id}>{`${item[id]}`}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </Story>
  );
}
