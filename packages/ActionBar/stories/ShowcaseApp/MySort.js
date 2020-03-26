import React from "react";
import { Sort, useSort } from "../../src";

export default function MySort({ columns }) {
  const { appliedNumber, sortedFields, onAddField, onDeleteField, onChangeField, onApply } = useSort({
    columns,
  });

  return (
    <Sort appliedNumber={appliedNumber} columns={columns} onAddField={onAddField} onApply={onApply}>
      {sortedFields.map((field, index) => (
        <Sort.Field key={field.id} {...field} onDelete={onDeleteField} onChange={onChangeField} isFirst={index === 0} />
      ))}
    </Sort>
  );
}
