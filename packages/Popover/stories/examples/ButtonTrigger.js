import React from "react";
import Button from "@paprika/button";
import Popover from "../../src";

export default function ButtonTrigger() {
  return (
    <Popover>
      <Popover.Trigger>{handler => <Button onClick={handler}>More info</Button>}</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>Lorem hipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
}
