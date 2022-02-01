import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import Showcase from "./examples/Showcase";

const storyName = getStoryName("Spinner");

export default {
  title: storyName,
};

export const showcase = () => <Showcase />;

showcase.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
