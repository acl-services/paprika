import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import Switch from "../src/Switch";
import Screener from "./examples/Variations";
import A11y from "./tests/A11y";

const storyName = getStoryName("Switch");

export default {
  title: `${storyName}/Backyard/Tests`,
  component: Switch,
};

export const screener = () => <Screener />;
screener.story = { name: "Screener", parameters: testStoryParameters };

export const a11y = () => <A11y />;
a11y.story = { name: "Accessibility", parameters: testStoryParameters };
