import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
import Example from "../SwitchExample";
import Switch from "../../src/Switch";

const ScreenerStory = () => (
  <Story>
    <StoryHeading>Default</StoryHeading>
    <StoryHeading level={3}>Small</StoryHeading>
    <Example size={Switch.types.size.SMALL} />
    <StoryHeading level={3}>Medium</StoryHeading>
    <Example />
    <StoryHeading level={3}>Large</StoryHeading>
    <Example size={Switch.types.size.LARGE} />
    <StoryHeading>disabled</StoryHeading>
    <StoryHeading level={3}>when not checked</StoryHeading>
    <Example isDisabled />
    <StoryHeading level={3}>when not checked</StoryHeading>
    <Example isDisabled isChecked={false} />
  </Story>
);

export default ScreenerStory;
