import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import Spinner from "../../../src";

const isDarkBackground = {
  backgroundColor: "#d7d7d7",
  width: "300px",
  padding: "20px",
  margin: "auto",
};

const ScreenerStory = () => (
  <Story>
    <Spinner size="small" />
    <Spinner />
    <Spinner caption="Spinner Snowman" size="large" />
    <Rule />
    <div style={isDarkBackground}>
      <Spinner size="small" isDark />
      <Spinner isDark />
      <Spinner caption="Spinner Snowman" size="large" isDark />
    </div>
  </Story>
);

export default ScreenerStory;
