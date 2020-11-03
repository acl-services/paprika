import React from "react";
import Button from "@paprika/button";
import Popover from "../../src";

export default function DefaultisOpen() {
  return (
    <Popover defaultIsOpen>
      <Popover.Trigger data-test-attr="propagated">
        {handler => <Button onClick={handler}>defaultIsOpen</Button>}
      </Popover.Trigger>
      <Popover.Content data-test-attr="propagated">
        <Popover.Card data-test-attr="propagated">
          Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.
        </Popover.Card>
      </Popover.Content>
    </Popover>
  );
}
