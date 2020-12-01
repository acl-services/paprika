import React from "react";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";

const storyName = getStoryName("StatusTracker");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "StatusTracker-tests",
};

export const screener = () => <Showcase />;
screener.story = {
  parameters: {
    docs: { page: null },
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};
