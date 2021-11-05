import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { Gap } from "storybook/assets/styles/common.styles";
import ExampleStory from "storybook/components/ExampleStory";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import Breadcrumbs from "../src";

export default {
  title: getStoryName("Breadcrumbs"),
  component: Breadcrumbs,
};

export const showcase = Showcase;
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

export const variations = () => (
  <ExampleStory
    storyName="Breadcrumbs"
    tagline={ExampleStory.defaultTaglines.variations}
    component="Breadcrumbs"
    fileName="examples/Variations.js"
  >
    <Gap.Small />
    <Variations />
  </ExampleStory>
);
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
