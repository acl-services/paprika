import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Showcase from "./examples/Showcase";

export default {
  title: getStoryName("Panel"),
};

export const showcase = () => (
  <ExampleStory storyName="Panel" tagline={ExampleStory.defaultTaglines.showcase}>
    <Showcase />
  </ExampleStory>
);
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
