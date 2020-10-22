import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import ShowcaseStory from "./examples/Showcase";
import Variations from "./examples/Variations";
import Heading from "../src/Heading";

const storyName = getStoryName("Heading");

export default {
  title: storyName,
  component: Heading,
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
