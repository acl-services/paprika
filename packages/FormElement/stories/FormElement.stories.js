import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import ShowcaseStory from "./examples/Showcase";
import Variations from "./examples/Variations";
import FormElement from "../src/FormElement";

const storyName = getStoryName("FormElement");

export default {
  title: storyName,
  component: FormElement,
};

export const showcase = ShowcaseStory;
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = Variations;
variations.story = {
  decorators: [withKnobs],
  parameters: variationsStoryParameters,
};
