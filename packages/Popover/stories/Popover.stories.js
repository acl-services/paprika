import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";

import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import Popover from "../src/Popover";

const storyName = getStoryName("Popover");

export default {
  title: storyName,
  component: Popover,
};

export const ShowcaseStory = Showcase;
ShowcaseStory.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: {
    options: {
      isToolshown: true,
      showPanel: true,
      panelPosition: "bottom",
    },
    viewMode: "story",
  },
};

export const VariationsStory = () => (
  <ExampleStory storyName="Variations">
    <Variations />
  </ExampleStory>
);
VariationsStory.story = {
  name: "Variations",
  decorators: [withKnobs],
  parameters: {
    options: {
      isToolshown: true,
      showPanel: false,
      panelPosition: "bottom",
    },
    viewMode: "story",
  },
};
