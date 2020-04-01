import React from "react";
import nanoid from "nanoid";
import { Sort } from "../../src";

const getDefaultField = () => {
  return {
    id: nanoid(),
    columnId: "goals",
    direction: "ASCEND",
  };
};

export default function MySort({ columns }) {
  const [sortedFields, setSortedFields] = React.useState([]);

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

  const memorizedAddField = React.useCallback(handleAddField, [setSortedFields]);

  function handleDeleteField(deletedFieldId) {
    setSortedFields(prevFields => prevFields.filter(filter => filter.id !== deletedFieldId));
  }

  const memorizedDeleteField = React.useCallback(handleDeleteField, [setSortedFields]);

  return (
    <Sort columns={columns} onAddField={memorizedAddField} onApply={() => {}}>
      {sortedFields.map((field, index) => (
        <Sort.Field
          key={field.id}
          id={field.id}
          columnId={field.columnId}
          direction={field.direction}
          onDelete={memorizedDeleteField}
          onChange={memorizedHandleChange}
          isFirst={index === 0}
        />
      ))}
    </Sort>
  );
}
