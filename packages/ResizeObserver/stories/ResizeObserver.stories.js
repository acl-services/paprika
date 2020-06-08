import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Basic from "./examples/Basic";
import ResizeObserver from "../src";

export default {
  title: "Utilities | ResizeObserver",
  component: ResizeObserver,
};

export const basic = () => <Basic />;
basic.story = {
  decorators: [withKnobs],
  parameters: {
    docs: { page: Basic },
    options: {
      isToolshown: true,
      showPanel: true,
      panelPosition: "bottom",
    },
    viewMode: "story",
  },
};
