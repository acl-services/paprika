import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import ScrollContainerExample from "./sandbox/ScrollContainer";
import FocusTestExample from "./sandbox/FocusTest";
import DynamicContentExample from "./sandbox/DynamicContent";
import TransformedExample from "./sandbox/Transformed";
import Popover from "../src";

const storyName = getStoryName("Popover");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: Popover,
};

export const ScrollContainerStory = () => (
  <ExampleStory storyName="Scroll Container" component="Popover" fileName="sandbox/ScrollContainer.js">
    <ScrollContainerExample />
  </ExampleStory>
);
ScrollContainerStory.story = {
  name: "Scroll Container",
  decorators: [withKnobs],
  parameters: {
    ...testStoryParameters,
    options: {
      ...testStoryParameters.options,
      showPanel: true,
      panelPosition: "bottom",
    },
  },
};

export const FocusTestStory = () => (
  <ExampleStory storyName="Focus Management" component="Popover" fileName="sandbox/FocusTest.js">
    <FocusTestExample />
  </ExampleStory>
);
FocusTestStory.story = {
  name: "Focus Management",
  parameters: testStoryParameters,
};

export const DynamicContentStory = () => (
  <ExampleStory storyName="Dynamic Content" component="Popover" fileName="sandbox/DynamicContent.js">
    <DynamicContentExample />
  </ExampleStory>
);
DynamicContentStory.story = {
  name: "Dynamic Content",
  parameters: testStoryParameters,
};

export const TransformedStory = () => (
  <ExampleStory storyName="CSS Transform" component="Popover" fileName="sandbox/Transformed.js">
    <TransformedExample />
  </ExampleStory>
);
TransformedStory.story = {
  name: "CSS Transform",
  parameters: testStoryParameters,
};
