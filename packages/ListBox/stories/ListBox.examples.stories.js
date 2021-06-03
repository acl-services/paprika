import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import OnChange from "./examples/OnChange";
import Subcomponents from "./examples/Subcomponents";
import FormElementExample from "./examples/FormElement";
import ListBox from "../src";

const storyName = getStoryName("ListBox");

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
    ...exampleStoryParameters,
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
    ...exampleStoryParameters,
  },
};

export const formElementStory = () => (
  <ExampleStory component="ListBox" storyName="With FormElement" fileName="examples/FormElement.js">
    <FormElementExample />
  </ExampleStory>
);
formElementStory.story = {
  name: "With FormElement",
  parameters: {
    ...exampleStoryParameters,
  },
};
