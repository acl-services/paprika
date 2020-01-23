import React from "react";
import Button from "@paprika/button";
import Select from "@paprika/select";
import useI18n from "@paprika/l10n/lib/useI18n";
import rules, { rulesByType } from "./rules";
import { columnTypes } from "../../constants";
import Input from "./Input";
import DatePicker from "./DatePicker";
import { FilterItemStyled } from "./Filter.styles";

export default function FilterItem(prop) {
  const { filter, columns, onDeleteFilter, onChange, isFirst } = prop;
  const I18n = useI18n();
  const { columnId: selectedColumnId, rule: selectedRule, value } = filter;
  const selectedColumnType = columns.find(({ id }) => id === selectedColumnId).type;

  function handleRemoveFilter() {
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
    if (momentDate === null) {
      handleChangeValue("");
    } else {
      handleChangeValue(momentDate.format(columns.find(({ id }) => id === selectedColumnId).momentParsingFormat));
    }
  }

  function renderTextInput() {
    if (
      selectedRule === rules.IS_BLANK ||
      selectedRule === rules.IS_NOT_BLANK ||
      selectedRule === rules.IS_EMPTY ||
      selectedRule === rules.IS_NOT_EMPTY
    )
      return null;
    return <Input initialValue={value} onChange={handleChangeValue} />;
  }

  return (
    <FilterItemStyled data-pka-anchor="filter.filter-item">
      <Button.Close data-pka-anchor="filter.delete-button" onClick={handleRemoveFilter} size="small" />
      {isFirst ? I18n.t("navigation.filter.where") : I18n.t("navigation.filter.and")}
      <Select onChange={handleChangeColumn} value={selectedColumnId}>
        {columns.map(column => (
          <option key={column.id} value={column.id}>
            {column.label}
          </option>
        ))}
      </Select>
      <Select onChange={handleChangeRule} value={selectedRule}>
        {rulesByType[selectedColumnType].map(rule => (
          <option key={rule} value={rule}>
            {I18n.t(`navigation.filter.rules.${rule}`)}
          </option>
        ))}
      </Select>
      {selectedColumnType === columnTypes.DATE ? (
        <DatePicker
          initialDate={value}
          onChange={handleChangeDatePicker}
          parsingFormat={columns.find(({ id }) => id === selectedColumnId).momentParsingFormat}
        />
      ) : (
        renderTextInput()
      )}
    </FilterItemStyled>
  );
}
