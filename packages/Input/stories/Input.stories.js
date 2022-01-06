import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { InputStory } from "./Input.stories.styles";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import Input from "../src";

export default {
  title: getStoryName("Input"),
  component: Input,
};

export const showcase = Showcase;
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = () => (
  <InputStory
    storyName="Input"
    tagline={InputStory.defaultTaglines.variations}
    component="Input"
    fileName="examples/Variations.js"
  >
    <Variations />
  </InputStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
