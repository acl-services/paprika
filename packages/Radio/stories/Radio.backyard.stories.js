import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import Radio from "../src/Radio";
import Screener from "./tests/Screener";

const storyName = getStoryName("Radio");

export default {
  title: `${storyName}/Backyard/Tests`,
  component: Radio,
};

export const screener = () => <Screener />;
screener.story = { name: "Screener", parameters: testStoryParameters };
