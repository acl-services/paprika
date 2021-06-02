import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "@paprika/button";
import { Gap } from "storybook/assets/styles/common.styles";
import Select from "../../src";

export default function Uncontrolled() {
  const refSelect = React.useRef();
  const refSelect2 = React.useRef();

  return (
    <>
      <Select
        onChange={event => {
          action("value changed")(event.target.value);
        }}
        placeholder="Choose the best one..."
        ref={refSelect}
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
        ref={refSelect2}
      >
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
      </Select>
      <Gap />
      <Button
        onClick={() => {
          action("current values")(refSelect.current.value || "''", refSelect2.current.value || "''");
        }}
      >
        Get values
      </Button>
      <p>
        <code>value</code> for both components will be printed to <strong>Actions</strong> log.
      </p>
    </>
  );
}
