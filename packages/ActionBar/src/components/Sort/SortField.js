import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import InlineSelect from "../InlineSelect/InlineSelect";
import { sortDirections, localeTypeKeys, changeTypes } from "../../constants";
import SortContext from "./context";

import * as sc from "./Sort.styles";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  direction: PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND]).isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isFirst: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const defaultProps = {
  isFirst: true,
  id: null,
};

function SortField(props) {
  const { id, columnId: selectedColumnId, direction, isFirst, onDelete, onChange } = props;
  const { columns, fieldsRef } = React.useContext(SortContext);
  const I18n = useI18n();
  // TODO: adding a generic Sort ascend text without type
  const columnTypeTranslationKey =
    localeTypeKeys[columns.find(column => column.id === selectedColumnId).type] || "text";

  function handleRemoveFilter() {
    fieldsRef.current.focus();
    onDelete(id);
  }

  function handleChangeColumn(event) {
    onChange(changeTypes.COLUMN, { id, columnId: event.target.value });
  }

  function handleChangeRule(event) {
    onChange(changeTypes.DIRECTION, { id, direction: event.target.value });
  }

  return (
    <sc.SortField data-pka-anchor="sort.sort-field">
      <Button.Close data-pka-anchor="sort.delete-button" onClick={handleRemoveFilter} size="small" />
      {isFirst ? I18n.t("actionBar.sort.sort_by") : I18n.t("actionBar.sort.then_by")}
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
          `actionBar.sort.rules.${
            direction === sortDirections.ASCEND ? "ascending" : "descending"
          }.${columnTypeTranslationKey}`
        )}
      >
        <option value={sortDirections.ASCEND}>
          {I18n.t(`actionBar.sort.rules.ascending.${columnTypeTranslationKey}`)}
        </option>
        <option value={sortDirections.DESCEND}>
          {I18n.t(`actionBar.sort.rules.descending.${columnTypeTranslationKey}`)}
        </option>
      </InlineSelect>
    </sc.SortField>
  );
}

SortField.propTypes = propTypes;
SortField.defaultProps = defaultProps;

export default React.memo(SortField);
