import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { Controlled } from "./examples/Single/Controlled";
import { CustomChildrenInline } from "./examples/Single/CustomChildrenInline";
import { DefaultIsSelected } from "./examples/Single/DefaultIsSelected";
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

export const CustomChildrenInlineStory = () => (
  <ExampleStory component="ListBox" storyName="Custom children inline" fileName="examples/CustomChildrenInline.js">
    <CustomChildrenInline />
  </ExampleStory>
);

CustomChildrenInlineStory.story = {
  name: "Custom children inline",
  parameters: paramaters,
};

export const ControlledStory = () => (
  <ExampleStory component="ListBox" storyName="Controlled isSelected" fileName="examples/Controlled.js">
    <Controlled />
  </ExampleStory>
);

ControlledStory.story = {
  name: "Controlled ListBox",
  parameters: paramaters,
};

export const DefaultIsSelectedStory = () => (
  <ExampleStory component="ListBox" storyName="Default isSelected" fileName="examples/DefaultIsSelected.js">
    <DefaultIsSelected />
  </ExampleStory>
);

DefaultIsSelectedStory.story = {
  name: "Default isSelected",
  parameters: paramaters,
};
