import React from "react";
import Input from "../../src";

function ControlledExample() {
  const [value, setValue] = React.useState("default mustache hoodie");

  return (
    <Input
      hasClearButton
      onChange={event => {
        setValue(event ? event.target.value : "");
      }}
      value={value}
    />
  );
}

export default ControlledExample;
