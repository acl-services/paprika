import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Select from "../../src";

export default function Uncontrolled() {
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("Coke");

  return (
    <>
      <Select onChange={event => setValue(event.target.value)} value={value} placeholder="Choose the best one...">
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
      </Select>
      <Gap.Small />
      <Select onChange={event => setValue2(event.target.value)} value={value2} placeholder="Choose the best one...">
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
      </Select>
    </>
  );
}
