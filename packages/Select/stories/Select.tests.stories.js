import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { SelectStory } from "./Select.stories.styles";
import Screener from "./examples/Variations";

const storyName = getStoryName("Select");

export default {
  title: `${storyName}/Backyard/Tests`,
};

export const screener = () => (
  <SelectStory>
    <Screener />
  </SelectStory>
);
screener.story = { name: "Screener", parameters: testStoryParameters };
