import React from "react";
import { getStoryName } from "storybook/storyTree";
import CollapsibleCard from "../src";
import Variations from "./examples/Variations";

const storyName = getStoryName("CollapsibleCard");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "collapsible-card-tests",
  component: CollapsibleCard,
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
