import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import Variations from "./examples/Variations";
import ShowcaseStory from "./examples/Showcase";
import Checkbox from "../src";

export default {
  title: getStoryName("Checkbox"),
  component: Checkbox,
};

export const showcase = ShowcaseStory;
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = () => (
  <ExampleStory
    storyName="Checkbox"
    tagline={ExampleStory.defaultTaglines.variations}
    component="Checkbox"
    fileName="examples/Variations.js"
  >
    <Variations />
  </ExampleStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
