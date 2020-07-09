import React from "react";
import { getStoryName } from "storybook/storyTree";
import Screener from "./examples/Screener";
import { defaultParameters } from "./CollapsibleText.stories.helpers";

const storyName = getStoryName("CollapsibleText");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "collapsible-text-stories",
};

export const screener = () => <Screener />;
screener.story = { parameters: defaultParameters };
