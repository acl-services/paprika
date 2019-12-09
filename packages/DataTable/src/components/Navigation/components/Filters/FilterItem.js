import React from "react";
import Button from "@paprika/button";
import DatePicker from "./DatePicker";
import Input from "./Input";
import { useDataTableState, useDispatch } from "../../../..";
import { rulesByType } from "./rules";
import { columnTypes } from "../../../../constants";
import { FilterItemStyled } from "./Filters.styles";

export default function FilterItem(prop) {
  const { columnId: selectedColumnId, rule: selectedRule, id, value } = prop;
  const { columns, columnsOrder, data } = useDataTableState();
  const dispatch = useDispatch();

  function getColumnType(columnId) {
    return columns[columnId].type || (typeof data[0][columnId] === "number" ? columnTypes.NUMBER : columnTypes.TEXT);
  }

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
          rule: rulesByType[getColumnType(newColumnId)][0],
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
        {rulesByType[getColumnType(selectedColumnId)].map(rule => (
          <option key={rule} value={rule}>
            {rule}
          </option>
        ))}
      </select>
      {getColumnType(selectedColumnId) === columnTypes.DATE ? (
        <DatePicker
          onChange={momentDate => handleChangeValue(momentDate.format(columns[selectedColumnId].momentParsingFormat))}
          parsingFormat={columns[selectedColumnId].momentParsingFormat}
        />
      ) : (
        <Input initialValue={value} onChange={handleChangeValue} />
      )}
    </FilterItemStyled>
  );
}
