import React from "react";
import nanoid from "nanoid";
import Navigation, { Density, ColumnsArrangement, Sort } from "../../src";
import MyFilter from "./MyFilter";

const getDefaultField = () => {
  return {
    fieldId: nanoid(),
    columnId: "goals",
    direction: "ASCEND",
  };
};

const defaultColumnsForArrangement = [
  { id: "goals", label: "Goals", isHidden: false, isDisabled: false },
  { id: "name", label: "Name", isHidden: false, isDisabled: false },
  { id: "status", label: "Status", isHidden: false, isDisabled: false },
  { id: "country", label: "Country", isHidden: false, isDisabled: false },
];

const filterColumns = [
  {
    id: "goals",
    type: "NUMBER",
    label: "Goals",
  },
  {
    id: "name",
    type: "TEXT",
    label: "Name",
  },
  {
    id: "status",
    type: "TEXT",
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joinedDate",
    type: "DATE",
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: "BOOLEAN",
    label: "Shareable",
  },
  {
    id: "level",
    type: "SINGLE_SELECT",
    label: "Level",
  },
];

export default function App() {
  const [columns, setColumns] = React.useState(defaultColumnsForArrangement);
  const [sortedFields, setSortedFields] = React.useState([]);

  function handleSortFieldChange({ field, direction, columnId }) {
    let newField;
    if (columnId) {
      newField = { ...field, columnId };
    } else {
      newField = { ...field, direction };
    }

    setSortedFields(prevFields =>
      prevFields.map(fieldItem => (fieldItem.fieldId === field.fieldId ? newField : fieldItem))
    );
  }

  return (
    <Navigation>
      <Density />
      <MyFilter columns={filterColumns} />
      <Sort
        onChange={handleSortFieldChange}
        columns={filterColumns}
        fields={sortedFields}
        onAddField={() => {
          setSortedFields(prevFields => [...prevFields, getDefaultField()]);
        }}
        onDeleteField={deletedField => {
          setSortedFields(prevFields => [...prevFields].filter(filter => filter.fieldId !== deletedField.fieldId));
        }}
      />
      <ColumnsArrangement
        columns={columns}
        onChangeOrder={({ source, destination }) => {
          const newOrder = [...columns];
          const movedChild = newOrder.splice(source, 1);
          newOrder.splice(destination, 0, ...movedChild);
          setColumns(newOrder);
        }}
        onHideAll={() => {
          setColumns(prevColumns =>
            prevColumns.map(column => ({
              ...column,
              isHidden: true,
            }))
          );
        }}
        onShowAll={() => {
          setColumns(prevColumns =>
            prevColumns.map(column => ({
              ...column,
              isHidden: false,
            }))
          );
        }}
        onChangeVisibility={columnId => {
          setColumns(prevColumns =>
            prevColumns.map(column =>
              column.id === columnId
                ? {
                    ...column,
                    isHidden: !column.isHidden,
                  }
                : column
            )
          );
        }}
      />
    </Navigation>
  );
}
