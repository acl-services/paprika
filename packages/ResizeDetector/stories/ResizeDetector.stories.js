import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ShowcaseStory from "./examples/Showcase";
import ResizeDetector from "../src";

const storyName = getStoryName("ResizeDetector");

export default {
  title: storyName,
  component: ResizeDetector,
};

export const showcase = ShowcaseStory;
showcase.story = {
  decorators: [withKnobs],
  parameters: {
    ...showcaseStoryParameters,
    options: {
      ...showcaseStoryParameters.options,
      panelPosition: "bottom",
    },
  },
};
