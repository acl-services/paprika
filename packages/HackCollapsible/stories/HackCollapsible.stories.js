import React from "react";
import { getStoryName } from "storybook/storyTree";
import Variations from "./examples/Variations";

export default {
  title: getStoryName("HackCollapsible"),
};

export const variations = () => <Variations />;
variations.story = {
  parameters: {
    docs: { page: Variations },
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};
