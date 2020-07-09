import React from "react";
import { getStoryName } from "storybook/storyTree";
import Screener from "./examples/Screener";

const storyName = getStoryName("Toast");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "toast-tests",
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
