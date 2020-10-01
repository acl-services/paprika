import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ShowcaseStory from "./examples/Showcase";
import Variations from "./variations/Variations";
import Button from "../src";

const storyName = getStoryName("Button");

export default {
  title: storyName,
  component: Button,
};

export const showcase = ShowcaseStory;
showcase.story = {
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

export const variations = Variations;
variations.story = {
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
