import React from "react";
import nanoid from "nanoid";
import { Sort } from "@paprika/navigation";

export default function MySort({ appliedNumber, sortedFields, setSortedFields, columns, onApply }) {
  function getDefaultField() {
    return {
      id: nanoid(),
      columnId: columns[0].id,
      direction: "ASCEND",
    };
  }

  function handleSortFieldChange({ id: fieldId, direction, columnId }) {
    let change;
    if (columnId) {
      change = { columnId };
    } else {
      change = { direction };
    }

    setSortedFields(prevFields =>
      prevFields.map(fieldItem => (fieldItem.id === fieldId ? { ...fieldItem, ...change } : fieldItem))
    );
  }

  const memorizedHandleChange = React.useCallback(handleSortFieldChange, [setSortedFields]);

  function handleAddField() {
    setSortedFields(prevFields => [...prevFields, getDefaultField()]);
  }

  const memorizedAddField = React.useCallback(handleAddField, [setSortedFields, columns]);

  function handleDeleteField(deletedId) {
    setSortedFields(prevFields => [...prevFields].filter(filter => filter.id !== deletedId));
  }

  const memorizedDeleteField = React.useCallback(handleDeleteField, [setSortedFields]);

  return (
    <Sort appliedNumber={appliedNumber} columns={columns} onAddField={memorizedAddField} onApply={onApply}>
      {sortedFields.map((field, index) => (
        <Sort.Field
          key={field.id}
          {...field}
          onDelete={memorizedDeleteField}
          onChange={memorizedHandleChange}
          isFirst={index === 0}
        />
      ))}
    </Sort>
  );
}
