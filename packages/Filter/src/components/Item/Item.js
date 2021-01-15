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
import * as sc from "./FilterItem.styles";

const propTypes = {
  columnId: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onDeleteFilter: PropTypes.func.isRequired,
  renderValueField: PropTypes.func,
  rule: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

const defaultProps = {
  id: null,
  renderValueField: null,
};

function Item(props) {
  const {
    index,
    onChangeFilter,
    onDeleteFilter,
    id,
    columnId: selectedColumnId,
    rule: selectedRule,
    value,
    renderValueField: renderCustomValueField,
  } = props;
  const { columns, data, filterRef, onChangeOperator, operator, rulesByType } = React.useContext(FilterContext);
  const I18n = useI18n();

  const selectedColumnType = columns.find(({ id }) => id === selectedColumnId).type;

  const selectOptions = React.useMemo(() => {
    return selectedColumnType === types.columnTypes.SINGLE_SELECT
      ? data.filter((obj, index, arr) => {
          return arr.map(datum => datum[selectedColumnId]).indexOf(obj[selectedColumnId]) === index;
        })
      : null;
  }, [selectedColumnType, data, selectedColumnId]);

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
    onChangeFilter(types.changeTypes.FILTER_VALUE, { id, value: options[index].value });
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
              {rulesByType[selectedColumnType].map(rule => (
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

    if (shouldNotShowValueField) return null;

    if (renderCustomValueField) return renderCustomValueField();

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
            <ListBox onChange={handleChangeSingleSelectFilterValue}>
              <ListBox.Filter />
              {selectOptions.map(data => (
                <ListBox.Option
                  key={data[selectedColumnId]}
                  value={data[selectedColumnId]}
                  isSelected={data[selectedColumnId] === value}
                >
                  {data[selectedColumnId]}
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
              <ListBox.Filter />
              {columns.map(column => (
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
