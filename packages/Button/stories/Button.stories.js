import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
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
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = Variations;
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
