import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Textarea from "../../../src/Textarea";

const ScreenerStory = () => {
  return (
    <Story>
      <Textarea placeholder="Tell me a story..." size="small" a11yText="story" />
      <Textarea placeholder="Tell me a story..." a11yText="story" />
      <Textarea placeholder="Tell me a story..." size="large" a11yText="story" />
      <Textarea isDisabled value="This is my disabled story" a11yText="story" />
      <Textarea isReadOnly value="This is my read only story" a11yText="story" />
    </Story>
  );
};

export default ScreenerStory;
