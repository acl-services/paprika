import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { ButtonStory } from "./Button.stories.styles";
import Showcase from "./examples/Showcase";
import Variations from "./variations/Variations";

const storyName = getStoryName("Button");

export default {
  title: storyName,
};

export const showcase = () => (
  <ButtonStory storyName="Button" tagline={ButtonStory.defaultTaglines.showcase}>
    <Showcase />
  </ButtonStory>
);
showcase.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = () => (
  <ButtonStory storyName="Button" tagline={ButtonStory.defaultTaglines.variations}>
    <Variations />
  </ButtonStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
