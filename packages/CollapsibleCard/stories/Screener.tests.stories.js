import React from "react";
import { getStoryName } from "storybook/storyTree";
import CollapsibleCard from "../src";
import RealWorld from "./examples/RealWorld";

const storyName = getStoryName("CollapsibleCard");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "collapsible-card-tests",
  component: CollapsibleCard,
};

export const screener = () => <RealWorld />;
screener.story = {
  name: "Screener",
  parameters: {
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};
