import React from "react";
import Button from "@paprika/button";
import Popover from "../../src";

export default function ButtonStateExample() {
  return (
    <Popover>
      <Popover.Trigger data-test-attr="propagated">
        {(handler, attributes, isOpen) => (
          <Button onClick={handler}>{isOpen ? "Click to close" : "Click to open"}</Button>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>Lorem ipsum single-origin kombucha.</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
}
