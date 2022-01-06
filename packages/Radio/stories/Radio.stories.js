import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import Radio from "../src/Radio.styles";

export default {
  title: getStoryName("Radio"),
  component: Radio,
};

export const showcase = Showcase;
showcase.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = () => (
  <ExampleStory storyName="Variations" tagline={ExampleStory.defaultTaglines.variations}>
    <Variations />
  </ExampleStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
