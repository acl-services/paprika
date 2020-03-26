import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import InlineSelect from "../InlineSelect/InlineSelect";
import { sortDirections, localeTypeKeys } from "../../constants";
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

function SortItem(props) {
  const { id, columnId: selectedColumnId, direction, isFirst, onDelete, onChange } = props;
  const { columns, fieldsRef } = React.useContext(SortContext);
  const I18n = useI18n();
  const columnTypeTranslationKey = localeTypeKeys[columns.find(column => column.id === selectedColumnId).type];

  function handleRemoveFilter() {
    fieldsRef.current.focus();
    onDelete(id);
  }

  function handleChangeColumn(event) {
    onChange({ id, columnId: event.target.value });
  }

  function handleChangeRule(event) {
    onChange({ id, direction: event.target.value });
  }

  return (
    <sc.SortItem data-pka-anchor="sort.sort-field">
      <Button.Close data-pka-anchor="sort.delete-button" onClick={handleRemoveFilter} size="small" />
      {isFirst ? "Sort by" : "then by"}
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
    </sc.SortItem>
  );
}

SortItem.propTypes = propTypes;
SortItem.defaultProps = defaultProps;

export default React.memo(SortItem);
