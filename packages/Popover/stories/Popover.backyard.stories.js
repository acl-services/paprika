import React from "react";
import { getStoryName } from "storybook/storyTree";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import Transformed from "./backyard/sandbox/Transformed";
import DynamicContent from "./backyard/sandbox/DynamicContent";
import ScrollContainer from "./backyard/sandbox/ScrollContainer";
import FocusTest from "./backyard/sandbox/FocusTest";
import Popover from "../src/Popover";

const storyName = getStoryName("Popover");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: Popover,
};

export const transformed = () => (
  <ExampleStory storyName="CSS Transform" fileName="examples/Transformed.js">
    <Transformed />
  </ExampleStory>
);
transformed.story = { name: "CSS Transform", parameters: exampleStoryParameters };

export const dynamicContent = () => (
  <ExampleStory storyName="Dynamic" fileName="examples/DynamicContent.js">
    <DynamicContent />
  </ExampleStory>
);
dynamicContent.story = { name: "Dynamic", parameters: exampleStoryParameters };

export const scrollContainer = () => (
  <ExampleStory storyName="Scroll Container" fileName="examples/ScrollContainer.js">
    <ScrollContainer />
  </ExampleStory>
);
scrollContainer.story = { name: "Scroll Container", parameters: exampleStoryParameters };

export const focusTest = () => (
  <ExampleStory storyName="Testing Focus Management" fileName="examples/FocusTest.js">
    <FocusTest />
  </ExampleStory>
);
focusTest.story = { name: "Testing Focus Management", parameters: exampleStoryParameters };
