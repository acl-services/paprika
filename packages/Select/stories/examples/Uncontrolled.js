import React from "react";
import { action } from "@storybook/addon-actions";
import { Gap } from "storybook/assets/styles/common.styles";
import Select from "../../src";

export default function Uncontrolled() {
  return (
    <>
      <Select
        onChange={event => {
          action("value changed")(event.target.value);
        }}
        placeholder="Choose the best one..."
      >
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
      </Select>
      <Gap.Small />
      <Select
        defaultValue="Coke"
        onChange={event => {
          action("value changed")(event.target.value);
        }}
        placeholder="Choose the best one..."
      >
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
      </Select>
    </>
  );
}
