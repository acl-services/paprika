import React from "react";
import Heading from "@paprika/heading";
import ActionBar, { ColumnsArrangement, SearchInput, Sort, useColumnsArrangement, useSort } from "../../src";
import data from "./data";

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

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { sortedFields, sortedData, onDeleteSort, onChangeSort, ...sortProps } = useSort({
    columns: columnsSettings,
    data,
    maxSortFields: 3,
  });
  const { orderedColumnIds, isColumnHidden, ...handlers } = useColumnsArrangement(
    ["goals", "name", "status", "country", "joined", "shareable", "level", "position"],
    ["name"]
  );

  const subset = React.useMemo(() => {
    return sortedData.filter(item =>
      searchTerm
        ? !!Object.values(item).find(value => {
            return new RegExp(`${searchTerm}`, "i").test(`${value}`);
          })
        : true
    );
  }, [searchTerm, sortedData]);

  return (
    <React.Fragment>
      <Heading level={2}>ActionBar showcase</Heading>

      <ActionBar>
        <SearchInput
          onChange={term => {
            setSearchTerm(term);
          }}
        />

        <Sort {...sortProps} columns={columnsSettings}>
          {sortedFields.map((field, index) => {
            return (
              <Sort.Field
                columnId={field.columnId}
                direction={field.direction}
                id={field.id}
                isFirst={index === 0}
                key={field.id}
                onChange={onChangeSort}
                onDelete={onDeleteSort}
              />
            );
          })}
        </Sort>

        <ColumnsArrangement orderedColumnIds={orderedColumnIds} {...handlers}>
          {columnsSettings.map(column => (
            <ColumnsArrangement.ColumnDefinition
              key={column.id}
              id={column.id}
              label={column.label}
              isDisabled={column.id === "name"}
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
          {subset.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              {orderedColumnIds.map(id => (isColumnHidden(id) ? null : <td key={id}>{`${item[id]}`}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
