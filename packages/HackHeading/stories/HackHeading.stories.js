import React from "react";
import { getStoryName } from "storybook/storyTree";
import { variationsStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Variations from "./examples/Variations";

const storyName = getStoryName("HackHeading");

export default {
  title: storyName,
};

export const variations = () => (
  <ExampleStory storyName="HackHeading">
    <Variations />
  </ExampleStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
