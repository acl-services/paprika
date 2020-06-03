import React from "react";
import { getStoryName } from "storybook/storyTree";
import Collapsible from "../src";
import Variations from "./examples/Variations";

export default {
  title: `${getStoryName("Collapsible")}/Backyard/Tests`,
  component: Collapsible,
};

export const variations = () => <Variations />;
variations.story = {
  name: "Screener",
  parameters: {
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};
