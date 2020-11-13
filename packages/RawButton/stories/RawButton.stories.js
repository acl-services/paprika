import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import ShowcaseStory from "./examples/Showcase";
import Variations from "./examples/Variations";
import RawButton from "../src/RawButton";

const storyName = getStoryName("RawButton");

export default {
  title: storyName,
  component: RawButton,
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
