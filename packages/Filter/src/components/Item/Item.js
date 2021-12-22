import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import DeleteIcon from "@paprika/icon/lib/Trashbin";
import Input from "@paprika/input";
import ListBox from "@paprika/list-box";
import DatePicker from "../DatePicker";
import FilterContext from "../../context";
import * as types from "../../types";
import rules, { localeKeysByRule } from "../../rules";
import FilterPrefix from "../FilterPrefix";
import isIllogicalColumn from "../../helpers/isIllogicalColumn";
import * as sc from "./FilterItem.styles";
import isIllogicalRule from "../../helpers/isIllogicalRule";

const propTypes = {
  columnId: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onDeleteFilter: PropTypes.func.isRequired,
  renderValueField: PropTypes.func,
  rule: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.array, PropTypes.number]).isRequired,
};

const defaultProps = {
  id: null,
  renderValueField: null,
};

const MAX_OPTIONS = 15;

function Item({
  index,
  onChangeFilter,
  onDeleteFilter,
  id,
  columnId: selectedColumnId,
  rule: selectedRule,
  value,
  renderValueField: renderCustomValueField,
}) {
  const { children, columns, data, filterRef, onChangeOperator, operator, rulesByType } = React.useContext(
    FilterContext
  );
  const I18n = useI18n();

  const selectedColumnType = columns.find(({ id }) => id === selectedColumnId).type;

  const uniqueSelectOptions = React.useMemo(() => {
    switch (selectedColumnType) {
      case types.columnTypes.SINGLE_SELECT:
      case types.columnTypes.MULTI_SELECT:
        return data.filter((row, index, dataOriginal) => {
          const selectedColumnValues = dataOriginal.map(datum => datum[selectedColumnId]); // [{id, label}, {id, label}, ...]
          const position = selectedColumnValues.findIndex(
            selectedColumnValue =>
              selectedColumnValue.id === row[selectedColumnId].id &&
              selectedColumnValue.label === row[selectedColumnId].label
          );
          return position === index;
        });
      default:
        return null;
    }
  }, [selectedColumnType, data, selectedColumnId]);

  const existingFilters = React.Children.toArray(children).map(child => child.props);

  function handleRemoveFilter() {
    filterRef.current.focus();
    onDeleteFilter(id);
  }

  function handleChangeColumn(index, options) {
    onChangeFilter(types.changeTypes.COLUMN, { id, columnId: options[index].value });
  }

  function handleChangeRule(index, options) {
    onChangeFilter(types.changeTypes.RULE, { id, rule: options[index].value });
  }

  function handleChangeValue(e) {
    const newInputtedValue = e.target.value;
    onChangeFilter(types.changeTypes.FILTER_VALUE, { id, value: newInputtedValue });
  }

  function handleChangeDatePicker(momentDate) {
    filterRef.current.focus();

    if (momentDate === null) {
      handleChangeValue("");
    } else {
      handleChangeValue(momentDate.format(columns.find(({ id }) => id === selectedColumnId).momentParsingFormat));
    }
  }

  function handleChangeBooleanFilterValue(index, options) {
    onChangeFilter(types.changeTypes.FILTER_VALUE, { id, value: options[index].value === "true" });
  }

  function handleChangeSingleSelectFilterValue(index, options) {
    onChangeFilter(types.changeTypes.FILTER_VALUE, {
      id,
      value: options[index].value,
    });
  }

  function handleChangeMultiSelectFilterValue(indices, options) {
    onChangeFilter(types.changeTypes.FILTER_VALUE, { id, value: indices.map(index => options[index].value) });
  }

  function renderRuleField() {
    switch (selectedColumnType) {
      case types.columnTypes.BOOLEAN:
        return <sc.RuleSelect data-pka-anchor="filter.item.ruleSelector">{I18n.t("filter.rules.is")}</sc.RuleSelect>;
      default:
        return (
          <sc.RuleSelect data-pka-anchor="filter.item.ruleSelector">
            <ListBox onChange={handleChangeRule}>
              <ListBox.Trigger hasClearButton={false} />
              {rulesByType[selectedColumnType]
                .filter(rule => isIllogicalRule(operator, rule, existingFilters, selectedColumnId, id))
                .map(rule => (
                  <ListBox.Option key={rule} value={rule} isSelected={rule === selectedRule}>
                    {I18n.t(`filter.rules.${localeKeysByRule[rule]}`)}
                  </ListBox.Option>
                ))}
            </ListBox>
          </sc.RuleSelect>
        );
    }
  }

  function renderValueField() {
    const shouldNotShowValueField =
      selectedRule === rules.IS_BLANK ||
      selectedRule === rules.IS_NOT_BLANK ||
      selectedRule === rules.IS_EMPTY ||
      selectedRule === rules.IS_NOT_EMPTY;

    if (shouldNotShowValueField) {
      return null;
    }

    if (renderCustomValueField) {
      return renderCustomValueField();
    }

    switch (selectedColumnType) {
      case types.columnTypes.BOOLEAN:
        return (
          <sc.ValueInput data-pka-anchor="filter.item.valueInput" value={value.toString()}>
            <ListBox onChange={handleChangeBooleanFilterValue}>
              <ListBox.Trigger hasClearButton={false} />
              <ListBox.Option value="true" isSelected={value}>
                {I18n.t("filter.rules.true")}
              </ListBox.Option>
              <ListBox.Option value="false" isSelected={!value}>
                {I18n.t("filter.rules.false")}
              </ListBox.Option>
            </ListBox>
          </sc.ValueInput>
        );
      case types.columnTypes.DATE:
        return (
          <sc.ValueInput
            as={DatePicker}
            initialDate={value}
            onChange={handleChangeDatePicker}
            parsingFormat={columns.find(({ id }) => id === selectedColumnId).momentParsingFormat}
            data-pka-anchor="filter.item.valueInput"
          />
        );
      case types.columnTypes.SINGLE_SELECT:
        return (
          <sc.ValueInput data-pka-anchor="filter.item.valueInput">
            <ListBox key={`${selectedColumnId}-${index}`} onChange={handleChangeSingleSelectFilterValue}>
              <ListBox.Trigger
                onClickClear={() => {
                  handleChangeSingleSelectFilterValue(0, [{ value: "", label: "" }]);
                }}
              />
              {uniqueSelectOptions >= MAX_OPTIONS ? <ListBox.Filter /> : null}
              {uniqueSelectOptions.map(selectOption => (
                <ListBox.Option
                  key={selectOption[selectedColumnId].id}
                  value={selectOption[selectedColumnId].id}
                  isSelected={selectOption[selectedColumnId].id === value}
                >
                  {selectOption[selectedColumnId].label}
                </ListBox.Option>
              ))}
            </ListBox>
          </sc.ValueInput>
        );
      case types.columnTypes.MULTI_SELECT:
        return (
          <sc.ValueInput data-pka-anchor="filter.item.valueInput">
            <ListBox key={`${selectedColumnId}-${index}`} onChange={handleChangeMultiSelectFilterValue} isMulti>
              <ListBox.Trigger
                onClickClear={() => {
                  handleChangeMultiSelectFilterValue([], {});
                }}
              />
              {uniqueSelectOptions >= MAX_OPTIONS ? <ListBox.Filter /> : null}
              {uniqueSelectOptions.map(selectOption => (
                <ListBox.Option
                  key={selectOption[selectedColumnId].id}
                  value={selectOption[selectedColumnId].id}
                  isSelected={value.includes(selectOption[selectedColumnId].id)}
                >
                  {selectOption[selectedColumnId].label}
                </ListBox.Option>
              ))}
            </ListBox>
          </sc.ValueInput>
        );
      default:
        return (
          <sc.ValueInput
            as={Input}
            value={value}
            onChange={handleChangeValue}
            data-pka-anchor="filter.item.valueInput"
          />
        );
    }
  }

  return (
    <>
      <FilterPrefix index={index} onChangeOperator={onChangeOperator} operator={operator} />
      <sc.FilterItem data-pka-anchor="filter.item">
        <sc.RowWrapper>
          <sc.ColumnSelect data-pka-anchor="filter.item.columnSelector">
            <ListBox onChange={handleChangeColumn}>
              <ListBox.Trigger hasClearButton={false} />
              {columns.length >= MAX_OPTIONS ? <ListBox.Filter /> : null}
              {columns
                .filter(column => isIllogicalColumn(operator, column, existingFilters, index))
                .map(column => (
                  <ListBox.Option key={column.id} value={column.id} isSelected={column.id === selectedColumnId}>
                    {column.label}
                  </ListBox.Option>
                ))}
            </ListBox>
          </sc.ColumnSelect>

          {renderRuleField()}
          {renderValueField()}
        </sc.RowWrapper>

        <sc.DeleteButton
          aria-label={I18n.t("filter.actions.delete")}
          data-pka-anchor="filter.deleteFilterButton"
          onClick={handleRemoveFilter}
          kind="minor"
        >
          <DeleteIcon />
        </sc.DeleteButton>
      </sc.FilterItem>
    </>
  );
}

Item.propTypes = propTypes;
Item.types = types;
Item.defaultProps = defaultProps;

export default Item;
