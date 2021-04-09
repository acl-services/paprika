import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import { InputStory } from "./Input.stories.styles";
import Uncontrolled from "./examples/Uncontrolled";
import Controlled from "./examples/Controlled";

const storyName = getStoryName("Input");

export default {
  title: `${storyName}/Examples`,
};

export const uncontrolled = () => (
  <InputStory storyName="Uncontrolled" component="Input" fileName="examples/Uncontrolled.js">
    <Uncontrolled />
  </InputStory>
);
uncontrolled.story = {
  name: "Uncontrolled",
  parameters: exampleStoryParameters,
};

export const controlled = () => (
  <InputStory storyName="Controlled" component="Input" fileName="examples/Controlled.js">
    <Controlled />
  </InputStory>
);
controlled.story = {
  name: "Controlled",
  parameters: exampleStoryParameters,
};
