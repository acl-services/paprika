import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
import Example from "../SwitchExample";

const A11yStory = () => (
  <Story>
    <StoryHeading>Accessibility</StoryHeading>
    <Example a11yText="option one" />
  </Story>
);

export default A11yStory;
