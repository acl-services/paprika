import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { SelectStory } from "./Select.stories.styles";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import Select from "../src/Select.styles";

export default {
  title: getStoryName("Select"),
  component: Select,
};

export const showcase = Showcase;
showcase.story = {
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
