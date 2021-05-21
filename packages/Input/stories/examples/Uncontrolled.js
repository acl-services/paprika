import React from "react";
import { action } from "@storybook/addon-actions";
import Input from "../../src";

const UncontrolledExample = () => {
  return (
    <Input
      defaultValue="default jean shorts vinyl"
      hasClearButton
      onChange={event => {
        action("value changed")(event ? event.target.value || "''" : "event === null");
      }}
    />
  );
};

export default UncontrolledExample;
