import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import DeleteIcon from "@paprika/icon/lib/Trashbin";
import Input from "@paprika/input";
import Select from "@paprika/select";
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

  function handleChangeColumn(event) {
    const newColumnId = event.target.value;
    onChangeFilter(types.changeTypes.COLUMN, { id, columnId: newColumnId });
  }

  function handleChangeRule(event) {
    onChangeFilter(types.changeTypes.RULE, { id, rule: event.target.value });
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

  function handleChangeBooleanFilterValue(event) {
    onChangeFilter(types.changeTypes.FILTER_VALUE, { id, value: event.target.value === "true" });
  }

  function handleChangeSingleSelectFilterValue(event) {
    onChangeFilter(types.changeTypes.FILTER_VALUE, { id, value: event.target.value });
  }

  function renderRuleField() {
    switch (selectedColumnType) {
      case types.columnTypes.BOOLEAN:
        return I18n.t("filter.rules.is");
      default:
        return (
          <sc.RuleSelect
            as={Select}
            onChange={handleChangeRule}
            value={selectedRule}
            data-pka-anchor="filter.ruleSelector"
          >
            {rulesByType[selectedColumnType].map(rule => (
              <option key={rule} value={rule}>
                {I18n.t(`filter.rules.${localeKeysByRule[rule]}`)}
              </option>
            ))}
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
          <sc.ValueInput as={Select} value={value.toString()} onChange={handleChangeBooleanFilterValue}>
            <option value="true">{I18n.t("filter.rules.true")}</option>
            <option value="false">{I18n.t("filter.rules.false")}</option>
          </sc.ValueInput>
        );
      case types.columnTypes.DATE:
        return (
          <sc.ValueInput
            as={DatePicker}
            initialDate={value}
            onChange={handleChangeDatePicker}
            parsingFormat={columns.find(({ id }) => id === selectedColumnId).momentParsingFormat}
          />
        );

      case types.columnTypes.SINGLE_SELECT:
        return (
          <sc.ValueInput as={Select} value={value} onChange={handleChangeSingleSelectFilterValue}>
            {selectOptions.map(data => (
              <option key={data[selectedColumnId]} value={data[selectedColumnId]}>
                {data[selectedColumnId]}
              </option>
            ))}
          </sc.ValueInput>
        );
      default:
        return <sc.ValueInput as={Input} value={value} onChange={handleChangeValue} />;
    }
  }

  return (
    <>
      <FilterPrefix index={index} onChangeOperator={onChangeOperator} operator={operator} />
      <sc.FilterItem data-pka-anchor="filter.item">
        <sc.RowWrapper>
          <sc.ColumnSelect
            data-pka-anchor="filter.item.columnSelect"
            onChange={handleChangeColumn}
            value={selectedColumnId}
          >
            {columns.map(column => (
              <option key={column.id} value={column.id}>
                {column.label}
              </option>
            ))}
          </sc.ColumnSelect>

          {renderRuleField()}
          {renderValueField()}
        </sc.RowWrapper>

        <sc.DeleteButton data-pka-anchor="filter.deleteFilterButton" onClick={handleRemoveFilter} kind="minor">
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
