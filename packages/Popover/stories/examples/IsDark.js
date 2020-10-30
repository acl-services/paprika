import React from "react";
import Popover from "../../src";

export default function IsDarkExample() {
  return (
    <>
      <Popover isEager isDark>
        <Popover.Trigger data-test-attr="propagated">
          <span role="img" aria-label="bulb light">
            💡
          </span>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </>
  );
}
