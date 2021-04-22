import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Showcase from "./examples/Showcase";

const storyName = getStoryName("ProgressBar");

export default {
  title: storyName,
};

export const showcase = () => (
  <ExampleStory storyName="ProgressBar" tagline={ExampleStory.defaultTaglines.showcase}>
    <Showcase />
  </ExampleStory>
);
showcase.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
