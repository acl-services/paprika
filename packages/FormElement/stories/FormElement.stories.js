import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { FormElementStory } from "./FormElement.stories.styles";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";

const storyName = getStoryName("FormElement");

export default {
  title: storyName,
};

export const showcase = () => (
  <FormElementStory storyName="FormElement" tagline={FormElementStory.defaultTaglines.showcase}>
    <Showcase />
  </FormElementStory>
);
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = () => (
  <FormElementStory
    storyName="FormElement"
    tagline={FormElementStory.defaultTaglines.variations}
    component="FormElement"
    fileName="examples/Variations.js"
  >
    <Variations />
  </FormElementStory>
);
variations.story = {
  decorators: [withKnobs],
  parameters: variationsStoryParameters,
};
