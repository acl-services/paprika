import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import Popover from "../src";

const storyName = getStoryName("Popover");

export default {
  title: storyName,
  component: Popover,
};

export const ShowcaseStory = () => (
  <ExampleStory storyName="Popover" tagline={ExampleStory.defaultTaglines.showcase}>
    <Showcase />
  </ExampleStory>
);
ShowcaseStory.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const VariationsStory = () => (
  <ExampleStory storyName="Popover" tagline={ExampleStory.defaultTaglines.variations}>
    <Variations />
  </ExampleStory>
);
VariationsStory.story = {
  name: "Variations",
  decorators: [withKnobs],
  parameters: variationsStoryParameters,
};
