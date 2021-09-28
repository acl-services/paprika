import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { Controlled } from "./examples/Single/Controlled";
import { Inline } from "./examples/Single/Inline";
import ListBox from "../src";

const storyName = getStoryName("ListBox");

const paramaters = {
  viewMode: "story",
  options: {
    isToolshown: false,
    showPanel: true,
  },
};

export default {
  title: `${storyName}/Examples/Single`,
  component: ListBox,
};

export const ControlledStory = () => (
  <ExampleStory component="ListBox" storyName="Controlled ListBox" fileName="examples/Single/Controlled.js">
    <Controlled />
  </ExampleStory>
);
ControlledStory.story = {
  name: "Controlled",
  parameters: paramaters,
};

export const InlineStory = () => (
  <ExampleStory component="ListBox" storyName="Inline ListBox" fileName="examples/Single/Inline.js">
    <Inline />
  </ExampleStory>
);
InlineStory.story = {
  name: "Inline",
  parameters: paramaters,
};
