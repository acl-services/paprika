import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { variationsStoryParameters } from "storybook/assets/storyParameters";
import CopyInputVariations from "./variations/Variations";

const storyName = getStoryName("CopyInput");

export default {
  title: storyName,
};

export const VariationsStory = () => (
  <ExampleStory component="CopyInput" storyName="Variations CopyInput" fileName="examples/Variations.js">
    <CopyInputVariations />
  </ExampleStory>
);
VariationsStory.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
