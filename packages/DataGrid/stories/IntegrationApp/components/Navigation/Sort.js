import React from "react";
import nanoid from "nanoid";
import { Sort } from "@paprika/navigation";

export default function MySort({ sortedFields, setSortedFields, columns }) {
  function getDefaultField() {
    return {
      fieldId: nanoid(),
      columnId: columns[0].id,
      direction: "ASCEND",
    };
  }

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

  const memorizedAddField = React.useCallback(handleAddField, [setSortedFields, columns]);

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
