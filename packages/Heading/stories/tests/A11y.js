import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "../../src";

const A11yStory = () => (
  <Story>
    <Heading level={1} a11yText="A more descriptive text for a11y">
      Heading One
    </Heading>
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
    <Heading level={1} isSemantic={false}>
      Heading One
    </Heading>
  </Story>
);

export default A11yStory;
