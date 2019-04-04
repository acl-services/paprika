import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Spinner from "../../../Spinner";

const A11yStory = () => {
  return (
    <Story>
      <Spinner caption="Hey Spinner" />
      <Spinner ariaText="Hey Spinner" />
      <Spinner />
      <Spinner ariaText="Hey Spinner" caption="Spin the Spinner" />
    </Story>
  );
};

export default A11yStory;
