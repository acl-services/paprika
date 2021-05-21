import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "@paprika/button";
import { Gap } from "storybook/assets/styles/common.styles";
import Textarea from "../../src";

export default function Uncontrolled() {
  const refTextarea = React.useRef();

  return (
    <>
      <Textarea
        defaultValue="Default lorem hipsum authentic listicle freegan banjo tote bag bespoke kombucha single-origin coffee."
        onChange={event => {
          action("value changed")(event.target.value || "''");
        }}
        ref={refTextarea}
      />
      <Gap />
      <Button
        onClick={() => {
          action("current value")(refTextarea.current.value || "''");
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
