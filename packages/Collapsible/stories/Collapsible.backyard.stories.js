import React from "react";
import Collapsible from "../src";
import Variations from "./examples/Variations";

export default {
  title: " | Collapsible/Backyard/Tests",
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
