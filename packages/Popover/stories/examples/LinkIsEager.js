import React from "react";
import Popover from "../../src";

export default function LinkIsEagerExample() {
  return (
    <>
      <Popover isEager>
        <Popover.Trigger>
          {(handler, attributes) => (
            <a
              {...attributes}
              href="http://www.acl.com"
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
            >
              More info
            </a>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </>
  );
}
