import React from "react";
import Screener from "./examples/Screener";

export default {
  title: " | Toast/Automation Tests",
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
