import React from "react";
import Button from "@paprika/button";
import Input from "@paprika/input";
import { useDataTableState, useDispatch } from "../../../..";
import { rulesByType } from "./rules";
import { columnTypes } from "../../../../constants";
import { FilterItemStyled } from "./Filters.styles";

export default function FilterItem(prop) {
  const { columnId: selectedColumnId, rule: selectedRule, id, value } = prop;
  const { columns, columnsOrder, data } = useDataTableState();
  const dispatch = useDispatch();

  function getColumnType() {
    return (
      columns[selectedColumnId].type ||
      (typeof data[0][selectedColumnId] === "number" ? columnTypes.NUMBER : columnTypes.TEXT)
    );
  }

  function handleRemoveFilter() {
    dispatch({ type: "REMOVE_FILTER", payload: id });
  }

  function handleChangeColumn(event) {
    dispatch({
      type: "UPDATE_FILTER",
      payload: {
        id,
        changes: {
          columnId: event.target.value,
          rule: rulesByType[getColumnType()][0],
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
          value: "",
        },
      },
    });
  }

  function handleChangeValue(e) {
    dispatch({
      type: "UPDATE_FILTER",
      payload: {
        id,
        changes: {
          value: e.target.value,
        },
      },
    });
  }

  return (
    <FilterItemStyled>
      <Button onClick={handleRemoveFilter} kind="minor">
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
        {rulesByType[getColumnType()].map(rule => (
          <option key={rule} value={rule}>
            {rule}
          </option>
        ))}
      </select>
      <Input value={value} onChange={handleChangeValue} />
    </FilterItemStyled>
  );
}
