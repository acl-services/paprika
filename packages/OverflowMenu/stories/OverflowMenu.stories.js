import React from "react";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import OverflowMenu from "../src";

export default {
  title: getStoryName("OverflowMenu"),
  component: OverflowMenu,
};

export const showcase = () => (
  <ExampleStory storyName="OverlowMenu" tagline={ExampleStory.defaultTaglines.showcase}>
    <Showcase />
  </ExampleStory>
);
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
