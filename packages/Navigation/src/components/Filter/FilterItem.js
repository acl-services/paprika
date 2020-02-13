import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import DatePicker from "./DatePicker";
import InlineSelect from "../InlineSelect/InlineSelect";
import InlineInput from "../InlineInput/InlineInput";
import rules, { rulesByType, localeKeysByRule } from "./rules";
import { columnTypes } from "../../constants";
import * as styled from "./Filter.styles";

const propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.shape({
    columnId: PropTypes.string.isRequired,
    filterId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    renderValueField: PropTypes.func,
    rule: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  }).isRequired,
  filtersRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }).isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleteFilter: PropTypes.func.isRequired,
  operator: PropTypes.oneOf(["AND", "OR"]).isRequired,
  onChangeOperator: PropTypes.func,
};

const defaultProps = {
  onChangeOperator: null,
};

function FilterItem(props) {
  const { columns, filter, filtersRef, index, onChange, onDeleteFilter, operator, onChangeOperator } = props;
  const I18n = useI18n();
  const { columnId: selectedColumnId, rule: selectedRule, value, renderValueField: renderCustomValueField } = filter;
  const selectedColumnType = columns.find(({ id }) => id === selectedColumnId).type;

  function handleRemoveFilter() {
    filtersRef.current.focus();
    onDeleteFilter(filter);
  }

  function handleChangeColumn(event) {
    const newColumnId = event.target.value;
    onChange({ filter, columnId: newColumnId });
  }

  function handleChangeRule(event) {
    onChange({ filter, rule: event.target.value });
  }

  function handleChangeValue(newValue) {
    onChange({ filter, value: newValue });
  }

  function handleChangeDatePicker(momentDate) {
    filtersRef.current.focus();

    if (momentDate === null) {
      handleChangeValue("");
    } else {
      handleChangeValue(momentDate.format(columns.find(({ id }) => id === selectedColumnId).momentParsingFormat));
    }
  }

  function renderRuleField() {
    switch (selectedColumnType) {
      case columnTypes.BOOLEAN:
        return I18n.t("navigation.filter.rules.is");
      default:
        return (
          <InlineSelect
            onChange={handleChangeRule}
            value={selectedRule}
            selectedLabel={I18n.t(`navigation.filter.rules.${localeKeysByRule[selectedRule]}`)}
            data-pka-anchor="navigation.filter.ruleSelector"
          >
            {rulesByType[selectedColumnType].map(rule => (
              <option key={rule} value={rule}>
                {I18n.t(`navigation.filter.rules.${localeKeysByRule[rule]}`)}
              </option>
            ))}
          </InlineSelect>
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
      case columnTypes.BOOLEAN:
        return (
          <InlineSelect
            value={`${value}`}
            onChange={event => {
              onChange({ filter, value: event.target.value === "true" });
            }}
            selectedLabel={I18n.t(`navigation.filter.rules.${value}`)}
          >
            <option value="true">{I18n.t("navigation.filter.rules.true")}</option>
            <option value="false">{I18n.t("navigation.filter.rules.false")}</option>
          </InlineSelect>
        );
      case columnTypes.DATE:
        return (
          <DatePicker
            initialDate={value}
            onChange={handleChangeDatePicker}
            parsingFormat={columns.find(({ id }) => id === selectedColumnId).momentParsingFormat}
          />
        );
      default:
        return (
          <InlineInput inputKey={`${selectedColumnId}-${selectedRule}`} value={value} onChange={handleChangeValue} />
        );
    }
  }

  function renderPrefix() {
    switch (index) {
      case 0:
        return I18n.t("navigation.filter.where");
      case 1:
        if (onChangeOperator) {
          return (
            <InlineSelect
              onChange={onChangeOperator}
              value={operator}
              selectedLabel={operator === "AND" ? I18n.t("navigation.filter.and") : I18n.t("navigation.filter.or")}
            >
              <option value="AND">{I18n.t("navigation.filter.and")}</option>
              <option value="OR">{I18n.t("navigation.filter.or")}</option>
            </InlineSelect>
          );
        }
        return I18n.t(`navigation.filter.${operator === "AND" ? "and" : "or"}`);
      default:
        return I18n.t(`navigation.filter.${operator === "AND" ? "and" : "or"}`);
    }
  }

  return (
    <styled.FilterItem data-pka-anchor="navigation.filter.filterItem">
      <Button.Close data-pka-anchor="navigation.filter.deleteFilterButton" onClick={handleRemoveFilter} size="small" />
      {renderPrefix()}
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

      {renderRuleField()}
      {renderValueField()}
    </styled.FilterItem>
  );
}

FilterItem.propTypes = propTypes;
FilterItem.defaultProps = defaultProps;

export default React.memo(FilterItem);
