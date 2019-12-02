import React from "react";
import Button from "@paprika/button";
import ListBox from "@paprika/listbox";
import Input from "@paprika/input";
import { useDataTableState, useDispatch } from "../../../..";

const rules = ["is", "is_not", "contains", "does_not_contain", "is_blank", "is_not_blank"];

export default function FilterItem(prop) {
  const { columnId: selectedColumnId, rule: selectedRule, id, value } = prop;
  const { columns, columnsOrder } = useDataTableState();
  const dispatch = useDispatch();

  function handleRemoveFilter() {
    dispatch({ type: "REMOVE_FILTER", payload: id });
  }

  function handleChangeColumn(activeOptionIndex) {
    dispatch({
      type: "UPDATE_FILTER",
      payload: {
        id,
        attribute: "columnId",
        value: columnsOrder[activeOptionIndex],
      },
    });
  }

  function handleChangeRule(activeOptionIndex) {
    dispatch({
      type: "UPDATE_FILTER",
      payload: {
        id,
        attribute: "rule",
        value: rules[activeOptionIndex],
      },
    });
  }

  function handleChangeValue(e) {
    dispatch({
      type: "UPDATE_FILTER",
      payload: {
        id,
        attribute: "value",
        value: e.target.value,
      },
    });
  }

  return (
    <li>
      <Button onClick={handleRemoveFilter}>X</Button>
      Where
      <ListBox onChange={handleChangeColumn}>
        <ListBox.Trigger hasClearButton={false} />
        {columnsOrder.map(columnId => (
          <ListBox.Option isSelected={columnId === selectedColumnId}>{columns[columnId].header}</ListBox.Option>
        ))}
      </ListBox>
      <ListBox onChange={handleChangeRule}>
        <ListBox.Trigger hasClearButton={false} />
        {rules.map(rule => (
          <ListBox.Option isSelected={rule === selectedRule}>{rule}</ListBox.Option>
        ))}
      </ListBox>
      <Input onChange={handleChangeValue} value={value} />
    </li>
  );
}
