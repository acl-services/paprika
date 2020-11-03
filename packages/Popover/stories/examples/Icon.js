import React from "react";
import Icon from "@paprika/icon/lib/InfoCircle";
import Popover from "../../src";

export default function IconExample() {
  return (
    <>
      <Popover isEager>
        <Popover.Trigger>
          {(handler, attributes) => (
            <Icon
              {...attributes}
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
              tabIndex={0}
              role="img"
              aria-label="info"
            />
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
