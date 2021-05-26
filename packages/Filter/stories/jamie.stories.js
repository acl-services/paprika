import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Story } from "storybook/assets/styles/common.styles";
import JamieApp from "./JamieApp";

const storyName = getStoryName("Filter");

export default {
  title: storyName,
};

export const JamieFilterExample = () => (
  <Story>
    <JamieApp />
  </Story>
);
