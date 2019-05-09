import React from "react";
import ListBox from "../../../src";

export default function CustomOnClick() {
  return (
    <ListBox>
      <ListBox.Option>One</ListBox.Option>
      <ListBox.Option
        preventDefaultOnSelect
        onClick={() => {
          alert("Custom alert");
        }}
      >
        <span css="color: red; font-weight: bold;">I will trigger an alert</span>
      </ListBox.Option>
      <ListBox.Option>Three</ListBox.Option>
    </ListBox>
  );
}
