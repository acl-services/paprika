import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import Radio from "../src/Radio";
import Screener from "./tests/Screener";
import A11y from "./tests/A11y";

const storyName = getStoryName("Radio");

export default {
  title: `${storyName}/Backyard/Tests`,
  component: Radio,
};

export const screener = () => <Screener />;
screener.story = { name: "Screener", parameters: testStoryParameters };

export const a11y = () => <A11y />;
a11y.story = { name: "Accessibility", parameters: testStoryParameters };
