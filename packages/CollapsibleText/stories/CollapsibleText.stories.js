import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Variations from "./examples/Variations";
import Showcase from "./examples/Showcase";
import CollapsibleText from "../src";

export default {
  title: "CollapsibleText",
  component: CollapsibleText,
};

export const showcase = Showcase;

showcase.story = {
  parameters: {
    docs: { page: null },
    decorators: [withKnobs],
    options: {
      isToolshown: true,
      showPanel: true,
    },
  },
};

export const variations = () => <Variations />;

variations.story = {
  parameters: {
    docs: { page: null },
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};
