import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { SelectStory } from "./Select.stories.styles";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";

const storyName = getStoryName("Select");

export default {
  title: storyName,
};

export const showcase = () => (
  <SelectStory storyName="Select" tagline={SelectStory.defaultTaglines.showcase}>
    <Showcase />
  </SelectStory>
);
showcase.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = () => (
  <SelectStory
    storyName="Select"
    tagline={SelectStory.defaultTaglines.variations}
    component="Select"
    fileName="examples/Variations.js"
  >
    <Variations />
  </SelectStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
