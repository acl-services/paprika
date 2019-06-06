import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Textarea from "../../../src/Textarea";

const A11yStory = () => {
  return (
    <Story>
      <Textarea placeholder="placeholder text passes contrast..." a11yText="textarea" />
      <Textarea isDisabled placeholder="placeholder text passes contrast..." a11yText="story" />
      <Textarea isReadOnly placeholder="placeholder text passes contrast..." a11yText="story" />
    </Story>
  );
};

export default A11yStory;
