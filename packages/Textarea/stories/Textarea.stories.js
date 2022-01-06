import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { TextareaStory } from "./Textarea.stories.styles";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import Textarea from "../src";

export default {
  title: getStoryName("Textarea"),
  component: Textarea,
};

export const showcase = Showcase;
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = () => (
  <TextareaStory
    storyName="Textarea"
    tagline={TextareaStory.defaultTaglines.variations}
    component="Textarea"
    fileName="examples/Variations.js"
  >
    <Variations />
  </TextareaStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
