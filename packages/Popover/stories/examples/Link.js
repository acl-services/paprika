import React from "react";
import Popover from "../../src";

export default function LinkExample() {
  return (
    <>
      <Popover>
        <Popover.Trigger>
          <a href="http://www.acl.com">More info</a>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </>
  );
}
