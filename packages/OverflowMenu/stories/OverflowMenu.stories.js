import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ShowcaseStory from "./examples/Showcase";
import OverflowMenu from "../src";

export default {
  title: getStoryName("OverflowMenu"),
  component: OverflowMenu,
};

export const showcase = ShowcaseStory;
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
