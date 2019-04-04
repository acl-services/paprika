import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Textarea from "../../Textarea";

const ShowcaseStory = () => {
  return (
    <Story>
      <Textarea placeholder="Tell me a story..." ariaLabel="story" />
    </Story>
  );
};

export default ShowcaseStory;
