import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Popover from "../src";

const Gap = styled.div`
  height: 200px;
`;

storiesOf("Popover/Automation Tests/Accessibility", module).add("Default", () => (
  <React.Fragment>
    <Popover isOpen>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Tip />
        <Popover.Card>Popover content.</Popover.Card>
      </Popover.Content>
    </Popover>
    <Gap />
    <Popover isOpen isDark>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Tip />
        <Popover.Card>Popover content.</Popover.Card>
      </Popover.Content>
    </Popover>
  </React.Fragment>
));
