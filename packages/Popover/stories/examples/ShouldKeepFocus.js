import React from "react";
import Popover from "../../src";

export default function ShouldKeepFocusExample() {
  return (
    <Popover shouldKeepFocus>
      <Popover.Trigger data-test-attr="propagated">
        <input />
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>Lorem ipsum single-origin kombucha.</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
}
