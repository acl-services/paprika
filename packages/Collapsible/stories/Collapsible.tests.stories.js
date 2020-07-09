import React from "react";
import { getStoryName } from "storybook/storyTree";
import Collapsible from "../src";
import Variations from "./examples/Variations";

const storyName = getStoryName("Collapsible");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "collapsible-tests",
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
