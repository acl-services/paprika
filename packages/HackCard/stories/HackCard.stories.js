import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import Themes from "./examples/Themes";
import ExtraThemes from "./examples/ExtraThemes";

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

export const extraThemes = () => (
  <ExampleStory storyName="Extra HackCard Themes">
    <ExtraThemes />
  </ExampleStory>
);
extraThemes.story = {
  parameters: exampleStoryParameters,
};
