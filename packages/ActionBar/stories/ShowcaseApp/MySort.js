import React from "react";
import { Sort, useSort } from "../../src";

export default function MySort({ columns, data, onSort }) {
  const { appliedNumber, sortedFields, sortedData, onAddField, onDeleteField, onChangeField, onApply } = useSort({
    columns,
    data,
  });

  React.useEffect(() => {
    onSort(sortedData);
  }, [sortedData, onSort]);

  const handleDelete = fieldId => () => {
    onDeleteField(fieldId);
  };

  const handleChange = fieldId => params => {
    onChangeField({ ...params, id: fieldId });
  };

  return (
    <Sort appliedNumber={appliedNumber} columns={columns} onAddField={onAddField} onApply={onApply}>
      {sortedFields.map((field, index) => {
        return (
          <Sort.Field
            key={field.id}
            id={field.id}
            columnId={field.columnId}
            direction={field.direction}
            onDelete={handleDelete(field.id)}
            onChange={handleChange(field.id)}
            isFirst={index === 0}
          />
        );
      })}
    </Sort>
  );
}
