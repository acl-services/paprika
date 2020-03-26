import React from "react";
import { Sort, useSort } from "../../src";

export default function MySort({ columns }) {
  const { appliedNumber, sortedFields, onAddField, onDeleteField, onChangeField, onApply } = useSort({
    columns,
  });

  const handleDelete = fieldId => () => {
    onDeleteField(fieldId);
  };

  const handleChange = fieldId => params => {
    onChangeField({ ...params, id: fieldId });
  };

  return (
    <Sort appliedNumber={appliedNumber} columns={columns} onAddField={onAddField} onApply={onApply}>
      {sortedFields.map((field, index) => (
        <Sort.Field
          key={field.id}
          {...field}
          onDelete={handleDelete(field.id)}
          onChange={handleChange(field.id)}
          isFirst={index === 0}
        />
      ))}
    </Sort>
  );
}
