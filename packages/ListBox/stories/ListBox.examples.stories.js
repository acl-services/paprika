import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import OnChange from "./examples/OnChange";
import Subcomponents from "./examples/Subcomponents";
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
  title: `${storyName}/Examples`,
  component: ListBox,
};

export const SubcomponentsStory = () => (
  <ExampleStory component="ListBox" storyName="Subcomponents" fileName="examples/Subcomponents.js">
    <Subcomponents />
  </ExampleStory>
);

SubcomponentsStory.story = {
  name: "Subcomponents",
  parameters: {
    ...paramaters,
  },
};

export const OnChangeStory = () => (
  <ExampleStory component="ListBox" storyName="ListBox onChange" fileName="examples/OnChange.js">
    <OnChange />
  </ExampleStory>
);

OnChangeStory.story = {
  name: "OnChange",
  parameters: {
    ...paramaters,
  },
};
