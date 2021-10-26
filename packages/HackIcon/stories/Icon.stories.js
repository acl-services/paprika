import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import AllIconsStory from "./examples/AllIcons";

const storyName = getStoryName("HackIcon");

export default {
  title: storyName,
};

export const ShowcaseStory = () => (
  <ExampleStory storyName="All HackIcons">
    <AllIconsStory />
  </ExampleStory>
);
ShowcaseStory.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
