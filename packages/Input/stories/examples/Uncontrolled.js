import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "@paprika/button";
import { Gap } from "storybook/assets/styles/common.styles";
import Input from "../../src";

export default function Uncontrolled() {
  const refInput = React.useRef();

  return (
    <>
      <Input
        defaultValue="default jean shorts vinyl"
        hasClearButton
        onChange={event => {
          action("value changed")(event ? event.target.value || "''" : "event === null");
        }}
        ref={refInput}
      />
      <Gap />
      <Button
        onClick={() => {
          action("current value")(refInput.current.value || "''");
        }}
      >
        Get value
      </Button>
      <p>
        <code>value</code> will be printed to <strong>Actions</strong> log.
      </p>
    </>
  );
}
