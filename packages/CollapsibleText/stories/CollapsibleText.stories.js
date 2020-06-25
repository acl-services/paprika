import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Variations from "./examples/Variations";
import Showcase from "./examples/Showcase";
import { defaultParameters } from "./CollapsibleText.stories.helpers";
import CollapsibleText from "../src";

export default {
  title: getStoryName("CollapsibleText"),
  component: CollapsibleText,
};

const showcaseParameters = Object.assign({}, defaultParameters, {
  options: {
    showPanel: true,
    selectedPanel: "storybook/knobs/panel",
    panelPosition: "right",
  },
  viewMode: "story",
});

export const showcase = Showcase;
showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseParameters,
};

export const variations = () => <Variations />;
variations.story = { parameters: defaultParameters };
