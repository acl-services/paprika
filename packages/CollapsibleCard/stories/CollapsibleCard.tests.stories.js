import React from "react";
import { getStoryName } from "storybook/storyTree";
import CollapsibleCard from "../src";
import Showcase from "./examples/Showcase";

const storyName = getStoryName("CollapsibleCard");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "collapsible-card-tests",
  component: CollapsibleCard,
};

export const showcase = () => <Showcase />;
showcase.story = {
  name: "Screener",
  parameters: {
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};
