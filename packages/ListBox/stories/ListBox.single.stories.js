import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { Controlled } from "./examples/Single/Controlled";
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
  <ExampleStory component="ListBox" storyName="Controlled isSelected" fileName="examples/Single/Controlled.js">
    <Controlled />
  </ExampleStory>
);

ControlledStory.story = {
  name: "Controlled ListBox",
  parameters: paramaters,
};
