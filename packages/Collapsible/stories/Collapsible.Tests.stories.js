import React from "react";
import Collapsible from "../src";
import Variations from "./examples/Variations";

export default {
  title: " | Collapsible/Automation Tests",
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
