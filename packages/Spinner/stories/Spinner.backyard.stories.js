import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import ScreenerStory from "./examples/test/Screener";
import A11yStory from "./examples/test/A11y";
import Spinner from "../src";

const storyName = getStoryName("Spinner");

export default {
  title: `${storyName}/Backyard/Tests`,
  component: Spinner,
};

export const screener = () => <ScreenerStory />;
screener.story = { name: "Screener", parameters: testStoryParameters };

export const a11y = () => <A11yStory />;
a11y.story = { name: "Accessibility", parameters: testStoryParameters };
