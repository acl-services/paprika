import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import DatePicker from "./DatePicker";
import InlineSelect from "../InlineSelect/InlineSelect";
import InlineInput from "../InlineInput/InlineInput";
import FilterContext from "./context";
import * as types from "../../types";
import * as sc from "./Filter.styles";

const propTypes = {
  columnId: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  renderValueField: PropTypes.func,
  rule: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

const defaultProps = {
  id: null,
  renderValueField: null,
  data: null,
};

function FilterItem(props) {
  const {
    index,
    onChange,
    onDelete,
    id,
    columnId: selectedColumnId,
    rule: selectedRule,
    value,
    renderValueField: renderCustomValueField,
    data,
  } = props;
  const { columns, filtersRef, onChangeOperator, operator, rulesByType } = React.useContext(FilterContext);
  const I18n = useI18n();

  const selectedColumnType = columns.find(({ id }) => id === selectedColumnId).type;

  const selectOptions = React.useMemo(() => {
    return selectedColumnType === types.COLUMN_SINGLE_SELECT
      ? data.filter((obj, index, arr) => {
          return arr.map(mapObj => mapObj[selectedColumnId]).indexOf(obj[selectedColumnId]) === index;
        })
      : null;
  }, [selectedColumnType, data, selectedColumnId]);

  function handleRemoveFilter() {
    filtersRef.current.focus();
    onDelete(id);
  }

  function handleChangeColumn(event) {
    const newColumnId = event.target.value;
    onChange(types.COLUMN, { id, columnId: newColumnId });
  }

  function handleChangeRule(event) {
    onChange(types.RULE, { id, rule: event.target.value });
  }

  function handleChangeValue(newValue) {
    onChange(types.FILTER_VALUE, { id, value: newValue });
  }

  function handleChangeDatePicker(momentDate) {
    filtersRef.current.focus();

    if (momentDate === null) {
      handleChangeValue("");
    } else {
      handleChangeValue(momentDate.format(columns.find(({ id }) => id === selectedColumnId).momentParsingFormat));
    }
  }

  function handleChangeBooleanFilterValue(event) {
    onChange(types.FILTER_VALUE, { id, value: event.target.value === "true" });
  }

  function handleChangeSingleSelectFilterValue(event) {
    onChange(types.FILTER_VALUE, { id, value: event.target.value });
  }

  function renderRuleField() {
    switch (selectedColumnType) {
      case types.COLUMN_BOOLEAN:
        return I18n.t("actionBar.filter.rules.is");
      default:
        return (
          <InlineSelect
            onChange={handleChangeRule}
            value={selectedRule}
            selectedLabel={I18n.t(`actionBar.filter.rules.${types.localeKeysByRule[selectedRule]}`)}
            data-pka-anchor="actionBar.filter.ruleSelector"
          >
            {rulesByType[selectedColumnType].map(rule => (
              <option key={rule} value={rule}>
                {I18n.t(`actionBar.filter.rules.${types.localeKeysByRule[rule]}`)}
              </option>
            ))}
          </InlineSelect>
        );
    }
  }
  function renderValueField() {
    const shouldNotShowValueField =
      selectedRule === types.IS_BLANK ||
      selectedRule === types.IS_NOT_BLANK ||
      selectedRule === types.IS_EMPTY ||
      selectedRule === types.IS_NOT_EMPTY;

    if (shouldNotShowValueField) return null;

    if (renderCustomValueField) return renderCustomValueField();

    switch (selectedColumnType) {
      case types.COLUMN_BOOLEAN:
        return (
          <InlineSelect
            value={`${value}`}
            onChange={handleChangeBooleanFilterValue}
            selectedLabel={I18n.t(`actionBar.filter.rules.${value}`)}
          >
            <option value="true">{I18n.t("actionBar.filter.rules.true")}</option>
            <option value="false">{I18n.t("actionBar.filter.rules.false")}</option>
          </InlineSelect>
        );
      case types.COLUMN_DATE:
        return (
          <DatePicker
            initialDate={value}
            onChange={handleChangeDatePicker}
            parsingFormat={columns.find(({ id }) => id === selectedColumnId).momentParsingFormat}
          />
        );

      case types.COLUMN_SINGLE_SELECT:
        return (
          <InlineSelect value={value} onChange={handleChangeSingleSelectFilterValue} selectedLabel={value}>
            {selectOptions.map(data => (
              <option key={data[selectedColumnId]} value={data[selectedColumnId]}>
                {data[selectedColumnId]}
              </option>
            ))}
          </InlineSelect>
        );
      default:
        return (
          <InlineInput inputKey={`${selectedColumnId}-${selectedRule}`} value={value} onChange={handleChangeValue} />
        );
    }
  }

  function renderPrefix() {
    const staticPrefix = I18n.t(`actionBar.filter.${operator === types.AND ? "and" : "or"}`);

    switch (index) {
      case 0:
        return I18n.t("actionBar.filter.where");
      case 1:
        if (onChangeOperator) {
          return (
            <InlineSelect
              onChange={onChangeOperator}
              value={operator}
              selectedLabel={operator === types.AND ? I18n.t("actionBar.filter.and") : I18n.t("actionBar.filter.or")}
            >
              <option value={types.AND}>{I18n.t("actionBar.filter.and")}</option>
              <option value={types.OR}>{I18n.t("actionBar.filter.or")}</option>
            </InlineSelect>
          );
        }
        return staticPrefix;
      default:
        return staticPrefix;
    }
  }
  return (
    <sc.FilterItem data-pka-anchor="actionBar.filter.filterItem">
      <Button.Close data-pka-anchor="actionBar.filter.deleteFilterButton" onClick={handleRemoveFilter} size="small" />
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
    </sc.FilterItem>
  );
}

FilterItem.propTypes = propTypes;
FilterItem.types = types;
FilterItem.defaultProps = defaultProps;

export default React.memo(FilterItem);
