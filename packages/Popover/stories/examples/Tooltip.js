import React from "react";
import Icon from "@paprika/icon/lib/InfoCircle";
import Popover from "../../src";

export default function Tooltip() {
  return (
    <Popover isEager isDark>
      <Popover.Trigger>
        {(handler, a11yAttributes) => (
          <Icon
            onMouseOver={handler}
            onMouseOut={handler}
            onFocus={handler}
            onBlur={handler}
            tabIndex={0}
            aria-label="info"
            role="img"
            {...a11yAttributes}
          />
        )}
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>Single-origin foraged kombucha</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
}
