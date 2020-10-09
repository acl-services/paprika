import React from "react";
import Popover from "../../src";

export default function NoCardExample() {
  return (
    <>
      <Popover isEager isDark>
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
        <Popover.Content>Lorem ipsum single-origin kombucha.</Popover.Content>
      </Popover>
    </>
  );
}
