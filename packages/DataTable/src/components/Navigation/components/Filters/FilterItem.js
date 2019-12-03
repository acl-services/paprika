import React from "react";
import Button from "@paprika/button";
import ListBox from "@paprika/listbox";
import Input from "@paprika/input";
import { useDataTableState, useDispatch } from "../../../..";
import rules from "./rules";

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
        value: rules.TEXT[activeOptionIndex],
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

  console.log(rules[columns[selectedColumnId].type || "TEXT"]);

  return (
    <li
      style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "nowrap",
        width: "600px",
      }}
    >
      <Button onClick={handleRemoveFilter} kind="minor">
        X
      </Button>
      Where
      <ListBox onChange={handleChangeColumn}>
        <ListBox.Trigger hasClearButton={false} />
        {columnsOrder.map(columnId => (
          <ListBox.Option key={columnId} isSelected={columnId === selectedColumnId}>
            {columns[columnId].header}
          </ListBox.Option>
        ))}
      </ListBox>
      <ListBox onChange={handleChangeRule}>
        <ListBox.Trigger hasClearButton={false} />
        {rules[columns[selectedColumnId].type || "TEXT"].map(rule => (
          <ListBox.Option key={rule} isSelected={rule === selectedRule}>
            {rule}
          </ListBox.Option>
        ))}
      </ListBox>
      <Input onChange={handleChangeValue} value={value} />
    </li>
  );
}
