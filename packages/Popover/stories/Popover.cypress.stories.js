import React from "react";
import { storiesOf } from "@storybook/react";
import windowHandles, { Input } from "../../../testingHelpers/src/windowHandles";
import Popover from "../src";

storiesOf("Popover/Automation Tests/Cypress", module)
  .addDecorator(
    windowHandles({
      align: new Input(),
      isEager: new Input(),
    })
  )
  .add("Basic Popover Test", () => (
    <Popover>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Tip />
        <Popover.Card>
          Popover content.
          <button type="button">Button inside</button>
        </Popover.Card>
      </Popover.Content>
    </Popover>
  ));
