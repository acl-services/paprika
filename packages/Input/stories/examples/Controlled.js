import React from "react";
import { action } from "@storybook/addon-actions";
import Input from "../../src";

export default function Controlled() {
  const [value, setValue] = React.useState("default mustache hoodie");

  return (
    <Input
      hasClearButton
      onChange={event => {
        setValue(event ? event.target.value : "");
        action("value changed")(event ? event.target.value || "''" : "event === null");
      }}
      value={value}
    />
  );
}
