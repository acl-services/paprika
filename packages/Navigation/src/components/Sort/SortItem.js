import React from "react";
import PropTypes from "prop-types";
import Select from "@paprika/select";
import Button from "@paprika/button";
import { sortDirections } from "../../constants";
import * as styled from "./Sort.styles";

const propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  field: PropTypes.shape({
    columnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    direction: PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND]),
  }).isRequired,
  fieldsRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }).isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleteField: PropTypes.func.isRequired,
};

export default function SortItem(props) {
  const { field, columns, onDeleteField, onChange, fieldsRef } = props;
  const { columnId: selectedColumnId, direction } = field;

  function handleRemoveFilter() {
    fieldsRef.current.focus();
    onDeleteField(field);
  }

  function handleChangeColumn(event) {
    onChange({ field, columnId: event.target.value });
  }

  function handleChangeRule(event) {
    onChange({ field, direction: event.target.value });
  }

  return (
    <styled.SortItem data-pka-anchor="filter.filter-item">
      <Button.Close data-pka-anchor="filter.delete-button" onClick={handleRemoveFilter} size="small" />
      <Select onChange={handleChangeColumn} value={selectedColumnId}>
        {columns.map(column => (
          <option key={column.id} value={column.id}>
            {column.label}
          </option>
        ))}
      </Select>
      <Select onChange={handleChangeRule} value={direction}>
        <option value={sortDirections.ASCEND}>Ascend</option>
        <option value={sortDirections.DESCEND}>Descend</option>
      </Select>
    </styled.SortItem>
  );
}

SortItem.propTypes = propTypes;
