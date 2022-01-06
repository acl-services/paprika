import React from "react";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { getStoryName } from "storybook/storyTree";
import ConfirmationExample from "./examples/ConfirmationExample";
import Confirmation from "../src";

const storyName = getStoryName("Confirmation");

export default {
  title: `${storyName}/Backyard/Screener`,
  component: Confirmation,
};

export const ScreenerStory = () => <ConfirmationExample />;

ScreenerStory.story = {
  name: "Screener",
  parameters: testStoryParameters,
};
