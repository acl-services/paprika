import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import CollapsibleCard from "../src/CollapsibleCard";
import Variations from "./examples/Variations";
import Showcase from "./examples/Showcase";

export default {
  title: getStoryName("CollapsibleCard"),
  component: CollapsibleCard,
};

export const showcase = Showcase;
showcase.story = {
  decorators: [withKnobs],
  parameters: {
    options: {
      isToolshown: true,
      showPanel: true,
    },
  },
};

export const variations = () => <Variations />;
variations.story = {
  parameters: {
    docs: { page: Variations },
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};
