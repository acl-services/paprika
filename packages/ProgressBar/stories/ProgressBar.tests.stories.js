import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import Screener from "./examples/Screener";

const storyName = getStoryName("ProgressBar");

export default {
  title: `${storyName}/Backyard/Tests`,
};

export const screener = () => <Screener />;
screener.story = { name: "Screener", parameters: testStoryParameters };
