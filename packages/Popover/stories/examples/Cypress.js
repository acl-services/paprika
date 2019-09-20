import React from "react";
import windowHandles, { Input } from "../../../../testingHelpers/src/windowHandles";
import Popover from "../../src/Popover";

export const propHandles = windowHandles({
  isEager: new Input(),
});

export default () => (
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
