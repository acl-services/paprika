import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ShowcaseStory from "./examples/Showcase";
import Confirmation from "../src";

export default {
  title: getStoryName("Confirmation"),
  component: Confirmation,
};

export const showcase = ShowcaseStory;
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
