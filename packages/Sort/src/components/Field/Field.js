import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import ListBox from "@paprika/list-box";
import SortContext from "../../context";
import * as types from "../../types";
import * as sc from "./Field.styles";

const propTypes = {
  columnId: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number.isRequired,
  onChangeSort: PropTypes.func.isRequired,
  onDeleteSort: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["ASCEND", "DESCEND"]).isRequired,
};

const defaultProps = {
  id: null,
};

const MAX_OPTIONS = 15;

export const icons = {
  [types.columnTypes.TEXT]: "text",
  [types.columnTypes.NUMBER]: "number",
  [types.columnTypes.DATE]: "number",
  [types.columnTypes.BOOLEAN]: "text",
  [types.columnTypes.SINGLE_SELECT]: "text",
};

function Field(props) {
  const { index, onChangeSort, onDeleteSort, id, columnId: selectedColumnId, direction: selectedDirection } = props;
  const { columns, sortRef } = React.useContext(SortContext);
  const I18n = useI18n();

  const selectedColumnType = columns.find(({ id }) => id === selectedColumnId).type;

  function handleRemoveFilter() {
    sortRef.current.focus();
    onDeleteSort(id);
  }

  function handleChangeColumn(index, options) {
    onChangeSort(types.changeTypes.COLUMN, { id, columnId: options[index].value });
  }

  function handleChangeRule(index, options) {
    onChangeSort(types.changeTypes.RULE, { id, rule: options[index].value });
  }

  return (
    <>
      <sc.Field sortId={id} data-pka-anchor="sort.field" onRemove={handleRemoveFilter}>
        <sc.RowWrapper>
          <sc.ColumnSelect data-pka-anchor="filter.item.columnSelector">
            <ListBox onChange={handleChangeColumn}>
              <ListBox.Trigger hasClearButton={false} />
              {columns.length >= MAX_OPTIONS ? <ListBox.Filter /> : null}
              {columns.map(column => (
                <ListBox.Option key={column.id} value={column.id} isSelected={column.id === selectedColumnId}>
                  {column.label}
                </ListBox.Option>
              ))}
            </ListBox>
          </sc.ColumnSelect>

          <sc.RuleSelect data-pka-anchor="filter.item.ruleSelector">
            <ListBox onChange={handleChangeRule}>
              <ListBox.Trigger hasClearButton={false} />
              {Object.values(types.directions).map(direction => (
                <ListBox.Option key={direction} value={direction} isSelected={direction === selectedDirection}>
                  {I18n.t(`sort.directions.${direction}`)}
                </ListBox.Option>
              ))}
            </ListBox>
          </sc.RuleSelect>
        </sc.RowWrapper>
      </sc.Field>
    </>
  );
}

Field.propTypes = propTypes;
Field.types = types;
Field.defaultProps = defaultProps;
Field.displayName = "Sort.Field";

export default Field;
