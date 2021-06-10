import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { InputStory } from "./Input.stories.styles";
import Screener from "./examples/Variations";

const storyName = getStoryName("Input");

export default {
  title: `${storyName}/Backyard/Tests`,
};

export const screener = () => (
  <InputStory>
    <Screener />
  </InputStory>
);
screener.story = { name: "Screener", parameters: testStoryParameters };
