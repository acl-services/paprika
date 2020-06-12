import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Basic from "./examples/Basic";
import ResizeDetector from "../src";

export default {
  title: "Utilities | ResizeDetector",
  component: ResizeDetector,
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
