import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import Themes from "./examples/Themes";

export default {
  title: getStoryName("HackPanel"),
};

export const themes = () => (
  <ExampleStory storyName="HackPanel Themes">
    <Themes />
  </ExampleStory>
);

themes.story = {
  parameters: exampleStoryParameters,
};
