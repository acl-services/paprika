import React from "react";
import Input from "@paprika/input";
import Popover from "../../src";

export default function ShouldKeepFocusExample() {
  return (
    <Popover shouldKeepFocus>
      <Popover.Trigger>{handler => <Input onClick={handler} onBlur={handler} />}</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>Lorem hipsum single-origin kombucha.</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
}
