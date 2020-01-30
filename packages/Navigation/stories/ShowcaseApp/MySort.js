import React from "react";
import nanoid from "nanoid";
import { Sort } from "../../src";

const getDefaultField = () => {
  return {
    fieldId: nanoid(),
    columnId: "goals",
    direction: "ASCEND",
  };
};

export default function MySort({ columns }) {
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

  const memorizedHandleChange = React.useCallback(handleSortFieldChange, [setSortedFields]);

  function handleAddField() {
    setSortedFields(prevFields => [...prevFields, getDefaultField()]);
  }

  const memorizedAddField = React.useCallback(handleAddField, [setSortedFields]);

  function handleDeleteField(deletedField) {
    setSortedFields(prevFields => [...prevFields].filter(filter => filter.fieldId !== deletedField.fieldId));
  }

  const memorizedDeleteField = React.useCallback(handleDeleteField, [setSortedFields]);

  return (
    <Sort
      onChange={memorizedHandleChange}
      columns={columns}
      fields={sortedFields}
      onAddField={memorizedAddField}
      onDeleteField={memorizedDeleteField}
    />
  );
}
