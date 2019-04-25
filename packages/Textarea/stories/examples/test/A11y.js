import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Textarea from "../../../Textarea";

const A11yStory = () => {
  return (
    <Story>
      <Textarea placeholder="placeholder text passes contrast..." a11yText="textarea" />
    </Story>
  );
};

export default A11yStory;
