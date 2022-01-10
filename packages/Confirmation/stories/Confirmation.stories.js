import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ConfirmationStory from "./examples/Showcase";
import Confirmation from "../src";

export default {
  title: getStoryName("Confirmation"),
  component: Confirmation,
};

export const showcase = () => (
  <ExampleStory storyName="Confirmation" tagline={ExampleStory.defaultTaglines.showcase}>
    <ConfirmationStory />
  </ExampleStory>
);
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
