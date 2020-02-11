import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import InlineSelect from "../InlineSelect/InlineSelect";
import { sortDirections, localeTypeKeys } from "../../constants";
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
  isFirstField: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleteField: PropTypes.func.isRequired,
};

function SortItem(props) {
  const { field, columns, isFirstField, onDeleteField, onChange, fieldsRef } = props;
  const { columnId: selectedColumnId, direction } = field;
  const I18n = useI18n();
  const columnTypeTranslationKey = localeTypeKeys[columns.find(column => column.id === selectedColumnId).type];

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
    <styled.SortItem data-pka-anchor="sort.sort-field">
      <Button.Close data-pka-anchor="sort.delete-button" onClick={handleRemoveFilter} size="small" />
      {isFirstField ? "Sort by" : "then by"}
      <InlineSelect
        onChange={handleChangeColumn}
        value={selectedColumnId}
        selectedLabel={columns.find(column => column.id === selectedColumnId).label}
      >
        {columns.map(column => (
          <option key={column.id} value={column.id}>
            {column.label}
          </option>
        ))}
      </InlineSelect>
      <InlineSelect
        onChange={handleChangeRule}
        value={direction}
        selectedLabel={I18n.t(
          `navigation.sort.rules.${
            direction === sortDirections.ASCEND ? "ascending" : "descending"
          }.${columnTypeTranslationKey}`
        )}
      >
        <option value={sortDirections.ASCEND}>
          {I18n.t(`navigation.sort.rules.ascending.${columnTypeTranslationKey}`)}
        </option>
        <option value={sortDirections.DESCEND}>
          {I18n.t(`navigation.sort.rules.descending.${columnTypeTranslationKey}`)}
        </option>
      </InlineSelect>
    </styled.SortItem>
  );
}

SortItem.propTypes = propTypes;

export default React.memo(SortItem);
