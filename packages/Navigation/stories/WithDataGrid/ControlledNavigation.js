import React from "react";
import nanoid from "nanoid";
import Navigation, { ColumnsArrangement, Sort } from "../../src";
import MyFilter from "./MyFilter";

const getDefaultField = () => {
  return {
    fieldId: nanoid(),
    columnId: "goals",
    direction: "ASCEND",
  };
};

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
    id: "joined",
    type: "DATE",
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
];

export default function ControlledNavigation(props) {
  const { setColumns, columns, setFilters, setSortedFields, filters, sortedFields } = props;

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
      <MyFilter filters={filters} setFilters={setFilters} columns={filterColumns} />
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
