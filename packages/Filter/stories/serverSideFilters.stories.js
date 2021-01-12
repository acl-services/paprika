import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Story } from "storybook/assets/styles/common.styles";
import App from "./MockServerFilter/App";

const storyName = getStoryName("Filter");

export default {
  title: storyName,
};

export const ServerSideFilterExample = () => (
  <Story>
    <App />
  </Story>
);
