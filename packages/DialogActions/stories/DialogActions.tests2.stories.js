import React from "react";
import { getStoryName } from "storybook/storyTree";
import Screener from "./examples/Screener";

export default {
  title: `${getStoryName("DialogActions")}/Backyard/Tests`,
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
