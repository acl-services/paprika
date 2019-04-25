import React from "react";
import { storiesOf } from "@storybook/react";

import Popover from "../src";

const gapStyles = `height: 120px;`;
const shortContent = "Popover content";
const longContent =
  "Lorem ipsum fixie raw denim scenester plaid sustainable lumbersexual, single-origin coffee. Live-edge yr tote bag vaporware slow-carb farm-to-table ethical af humblebrag.";

storiesOf("Popover/Automation Tests/Screener", module).add("basic", () => (
  <React.Fragment>
    <Popover isOpen>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Tip />
        <Popover.Card>{shortContent}</Popover.Card>
      </Popover.Content>
    </Popover>
    <div css={gapStyles} />
    <Popover isOpen isDark>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Tip />
        <Popover.Card>{shortContent}</Popover.Card>
      </Popover.Content>
    </Popover>
    <div css="text-align: right;">
      <Popover isOpen>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content>
          <Popover.Tip />
          <Popover.Card>{longContent}</Popover.Card>
        </Popover.Content>
      </Popover>
      <div css={gapStyles} />
      <Popover isOpen isDark>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content>
          <Popover.Tip />
          <Popover.Card>{longContent}</Popover.Card>
        </Popover.Content>
      </Popover>
    </div>
  </React.Fragment>
));
