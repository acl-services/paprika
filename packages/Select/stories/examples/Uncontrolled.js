import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Select from "../../src";

export default function Uncontrolled() {
  return (
    <>
      <Select placeholder="Choose the best one...">
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
      </Select>
      <Gap.Small />
      <Select placeholder="Choose the best one..." defaultValue="Coke">
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
      </Select>
    </>
  );
}
