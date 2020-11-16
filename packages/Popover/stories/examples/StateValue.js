import React from "react";
import Button from "@paprika/button";
import { Gap } from "storybook/assets/styles/common.styles";
import Popover from "../../src";

export default function StateValue() {
  return (
    <>
      <p>
        For an uncontrolled <code>&lt;Popover&gt;</code>, if you use a render function with the{" "}
        <code>&lt;Popover.Trigger&gt;</code> component, then the state value, called <code>isOpen</code>, is provided as
        the third parameter.
      </p>
      <p>
        Additionally, this example shows the <code>&lt;Popover&gt;</code> with the <code>defaultIsOpen</code> prop.
      </p>
      <Gap />
      <Popover defaultIsOpen>
        <Popover.Trigger>
          {(handler, a11yAttributes, isOpen) => (
            <Button onClick={handler}>{isOpen ? "Click to close" : "Click to open"}</Button>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem hipsum single-origin kombucha.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </>
  );
}
