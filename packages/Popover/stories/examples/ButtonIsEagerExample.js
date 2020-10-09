import React from "react";
import Button from "@paprika/button";
import Popover from "../../src";

export default function ButtonIsEagerExample() {
  return (
    <>
      <Popover isEager>
        <Popover.Trigger>
          {(handler, attributes) => (
            <Button
              {...attributes}
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
              onClick={() => {
                window.location.href = "http://www.acl.com";
              }}
            >
              More info
            </Button>
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
