import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { TextareaStory } from "./Textarea.stories.styles";
import Screener from "./examples/Variations";

const storyName = getStoryName("Textarea");

export default {
  title: `${storyName}/Backyard/Tests`,
};

export const screener = () => (
  <TextareaStory>
    <Screener />
  </TextareaStory>
);
screener.story = { name: "Screener", parameters: testStoryParameters };
