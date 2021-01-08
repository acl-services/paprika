import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Story } from "storybook/assets/styles/common.styles";
import App from "./MockServerFilter/App";

const storyName = getStoryName("Filters");

export default {
  title: storyName,
};

export const ServerSideFiltersExample = () => (
  <Story>
    <App />
  </Story>
);
