import React from "react";
import { getStoryName } from "storybook/storyTree";
import Screener from "./examples/Screener";
import { defaultParameters } from "./CollapsibleText.stories.helpers";

export default {
  title: `${getStoryName("CollapsibleText")}/Backyard/Tests`,
};

export const screener = () => <Screener />;
screener.story = { parameters: defaultParameters };
