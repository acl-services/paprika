import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Spinner from "../../../src";

const A11yStory = () => {
  return (
    <Story>
      <Spinner size="small" />
      <Spinner />
      <Spinner caption="Spinner Snowman" size="large" />
    </Story>
  );
};

export default A11yStory;
