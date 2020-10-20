import React from "react";
import Popover from "../../src";

export default function InputExample() {
  return (
    <>
      <Popover shouldKeepFocus>
        <Popover.Trigger>{handler => <input onClick={handler} onBlur={handler} />}</Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </>
  );
}
