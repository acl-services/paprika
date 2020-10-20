import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Popover from "../../../src/Popover";

const shortContent = "Popover content";
const longContent =
  "Lorem ipsum fixie raw denim scenester plaid sustainable lumbersexual, single-origin coffee. Live-edge yr tote bag vaporware slow-carb farm-to-table ethical af humblebrag.";

const Screener = () => (
  <React.Fragment>
    <Popover isOpen>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>{shortContent}</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
    <Gap.Large />
    <Popover isOpen isDark>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>{shortContent}</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
    <div style={{ textAlign: "right" }}>
      <Popover isOpen>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content>
          <Popover.Card>{longContent}</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap.Large />
      <Popover isOpen isDark>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content>
          <Popover.Card>{longContent}</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </div>
  </React.Fragment>
);

export default Screener;
