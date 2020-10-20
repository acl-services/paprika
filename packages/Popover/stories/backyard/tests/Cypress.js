import React from "react";
import windowHandles, { Input } from "../../../../../testingHelpers/src/windowHandles";
import Popover from "../../../src";

export const propHandles = windowHandles({
  isEager: new Input(),
});

export default function Cypress() {
  return (
    <Popover>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          Popover content.
          <button type="button">Button inside</button>
        </Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
}
