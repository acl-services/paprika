import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";

const storyName = getStoryName("Link");

export default {
  title: storyName,
};

export const showcase = (): JSX.Element => (
  <ExampleStory storyName="Link" tagline={ExampleStory.defaultTaglines.showcase}>
    <Showcase />
  </ExampleStory>
);
showcase.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = () => (
  <ExampleStory storyName="Link" tagline={ExampleStory.defaultTaglines.variations}>
    <Variations />
  </ExampleStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
