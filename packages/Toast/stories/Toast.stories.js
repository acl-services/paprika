import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Variations from "./examples/Variations";
import Showcase from "./examples/Showcase";
import Props from "./Toast.mdx";
import Toast from "../src";

const storyName = getStoryName("Toast");

export default {
  title: storyName,
  component: Toast,
};

export const showcase = Showcase;
showcase.story = {
  decorators: [withKnobs],
  parameters: {
    docs: { page: Props },
    options: {
      isToolshown: true,
      showPanel: true,
    },
    viewMode: "story",
  },
};

export const variations = () => <Variations />;
variations.story = {
  parameters: {
    docs: { page: Variations },
    options: {
      isToolshown: true,
      showPanel: false,
    },
    viewMode: "story",
  },
};
