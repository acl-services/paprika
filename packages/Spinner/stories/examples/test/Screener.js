import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Spinner from "../../../src";

const ScreenerStory = () => {
  return (
    <Story>
      <Spinner size="small" />
      <Spinner />
      <Spinner caption="Spinner Snowman" size="large" />
    </Story>
  );
};

export default ScreenerStory;
