import React from "react";
import { getStoryName } from "storybook/storyTree";
import Screener from "./examples/Screener";

const storyName = getStoryName("Card");

export default {
  title: `${storyName}/Backyard/Tests`,
};

export const screener = () => <Screener />;
screener.story = {
  parameters: {
    docs: { page: null },
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};
