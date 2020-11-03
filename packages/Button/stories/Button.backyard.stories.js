import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import { ButtonStory } from "./Button.stories.styles";
import States from "./examples/States";
import Kinds from "./examples/Kinds";
import Sizes from "./examples/Sizes";
import Button from "../src";

const storyName = getStoryName("Button");

export default {
  title: `${storyName}/Backyard/Starling`,
  component: Button,
};

export const states = () => (
  <ButtonStory storyName="States" fileName="examples/States.js">
    <States />
  </ButtonStory>
);
states.story = {
  name: "States",
  parameters: exampleStoryParameters,
};

export const kinds = () => (
  <ButtonStory storyName="Kinds" fileName="examples/Kinds.js">
    <Kinds />
  </ButtonStory>
);
kinds.story = {
  name: "Kinds",
  parameters: exampleStoryParameters,
};

export const sizes = () => (
  <ButtonStory storyName="Sizes" fileName="examples/Sizes.js">
    <Sizes />
  </ButtonStory>
);
sizes.story = {
  name: "Sizes",
  parameters: exampleStoryParameters,
};
