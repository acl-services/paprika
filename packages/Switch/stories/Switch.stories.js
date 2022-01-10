import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import Switch from "../src";

export default {
  title: getStoryName("Switch"),
  component: Switch,
};

export const showcase = () => (
  <ExampleStory storyName="Confirmation" tagline={ExampleStory.defaultTaglines.showcase}>
    <Showcase />
  </ExampleStory>
);
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = () => (
  <ExampleStory
    storyName="Switch"
    tagline={ExampleStory.defaultTaglines.variations}
    component="Switch"
    fileName="examples/Variations.js"
  >
    <Variations />
  </ExampleStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
