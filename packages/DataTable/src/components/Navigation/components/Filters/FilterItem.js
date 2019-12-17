import React from "react";
import Button from "@paprika/button";
import DatePicker from "./DatePicker";
import Input from "./Input";
import { useDataTableState, useDispatch } from "../../../..";
import rules, { rulesByType } from "./rules";
import { columnTypes } from "../../../../constants";
import { FilterItemStyled } from "./Filters.styles";
import getColumnType from "../../../../helpers/getColumnType";

export default function FilterItem(prop) {
  const { columnId: selectedColumnId, rule: selectedRule, id, value } = prop;
  const { columns, columnsOrder, data } = useDataTableState();
  const dispatch = useDispatch();
  const selectedColumnType = getColumnType(data, columns, selectedColumnId);

  function handleRemoveFilter() {
    dispatch({ type: "REMOVE_FILTER", payload: id });
  }

  function handleChangeColumn(event) {
    const newColumnId = event.target.value;
    dispatch({
      type: "UPDATE_FILTER",
      payload: {
        id,
        changes: {
          columnId: newColumnId,
          rule: rulesByType[getColumnType(data, columns, newColumnId)][0],
          value: "",
        },
      },
    });
  }

  function handleChangeRule(event) {
    dispatch({
      type: "UPDATE_FILTER",
      payload: {
        id,
        changes: {
          rule: event.target.value,
        },
      },
    });
  }

  function handleChangeValue(newValue) {
    dispatch({
      type: "UPDATE_FILTER",
      payload: {
        id,
        changes: {
          value: newValue,
        },
      },
    });
  }

  function handleChangeDatePicker(momentDate) {
    if (momentDate === null) {
      handleChangeValue("");
    } else {
      handleChangeValue(momentDate.format(columns[selectedColumnId].momentParsingFormat));
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
      <Button data-pka-anchor="filter.delete-button" onClick={handleRemoveFilter} kind="minor">
        X
      </Button>
      <select onChange={handleChangeColumn} value={selectedColumnId}>
        {columnsOrder.map(columnId => (
          <option key={columnId} value={columnId}>
            {columnId}
          </option>
        ))}
      </select>
      <select onChange={handleChangeRule} value={selectedRule}>
        {rulesByType[selectedColumnType].map(rule => (
          <option key={rule} value={rule}>
            {rule}
          </option>
        ))}
      </select>
      {selectedColumnType === columnTypes.DATE ? (
        <DatePicker
          initialDate={value}
          onChange={handleChangeDatePicker}
          parsingFormat={columns[selectedColumnId].momentParsingFormat}
        />
      ) : (
        renderTextInput()
      )}
    </FilterItemStyled>
  );
}
