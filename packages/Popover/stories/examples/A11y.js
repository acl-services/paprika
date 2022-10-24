import React from "react";
import { Gap, Story } from "storybook/assets/styles/common.styles";
import Popover from "../../src";

const ExampleStory = () => (
  <Story>
    <Popover isOpen>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>Popover content.</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
    <Gap.Large />
    <Popover isOpen isDark>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>Popover content.</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  </Story>
);

export default ExampleStory;
