import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { Gap } from "storybook/assets/styles/common.styles";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { ButtonStory } from "./Button.stories.styles";
import Showcase from "./examples/Showcase";
import Variations from "./variations/Variations";
import Button from "../src";

const storyName = getStoryName("Button");

export default {
  title: storyName,
  component: Button,
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

const variationsTagline = (
  <code>
    &lt;Button&gt;
    <Gap.Inline />
    &lt;Button.Link&gt;
    <Gap.Inline />
    &lt;Button.Icon&gt;
    <Gap.Inline />
    &lt;Button.Close&gt;
  </code>
);

export const variations = () => (
  <ButtonStory storyName="Variations" tagline={variationsTagline}>
    <Variations />
  </ButtonStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
