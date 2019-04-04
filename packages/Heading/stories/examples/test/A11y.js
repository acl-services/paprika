import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "../../../Heading";

const A11yStory = () => {
  return (
    <Story>
      <Heading level={1} displayLevel={6}>
        Heading One
      </Heading>
      <Heading level={1} isLight>
        Heading One with isLight
      </Heading>
      <Heading level={1} hasDivider>
        Heading One
      </Heading>
      <Heading level={1} hasUnderline>
        Heading One
      </Heading>
    </Story>
  );
};

export default A11yStory;
