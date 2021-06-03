import React from "react";
import { getStoryName } from "storybook/storyTree";
import { variationsStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Variations from "./Examples/Variations";

const storyName = getStoryName("Tag");

export default {
  title: storyName,
};

export const variations = () => (
  <ExampleStory storyName="Tag" tagline={ExampleStory.defaultTaglines.variations}>
    <Variations />
  </ExampleStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
