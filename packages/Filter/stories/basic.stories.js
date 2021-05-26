import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Story } from "storybook/assets/styles/common.styles";
import BasicApp from "./Basic";

const storyName = getStoryName("Filter");

export default {
  title: storyName,
};

export const Basic = () => (
  <Story>
    <BasicApp />
  </Story>
);
