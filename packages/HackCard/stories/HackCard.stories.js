import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import Themes from "./examples/Themes";

const storyName = getStoryName("HackCard");

export default {
  title: storyName,
};

export const themes = () => (
  <ExampleStory storyName="HackCard Themes">
    <Themes />
  </ExampleStory>
);
themes.story = {
  parameters: exampleStoryParameters,
};
