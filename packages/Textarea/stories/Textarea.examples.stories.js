import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import { TextareaStory } from "./Textarea.stories.styles";
import Uncontrolled from "./examples/Uncontrolled";
import Controlled from "./examples/Controlled";
import CustomAttributes from "./examples/CustomAttributes";
import Ref from "./examples/Ref";

const storyName = getStoryName("Textarea");

const actionStoryParameters = {
  ...exampleStoryParameters,
  options: {
    ...exampleStoryParameters.options,
    showPanel: true,
    panelPosition: "bottom",
  },
};

export default {
  title: `${storyName}/Examples`,
};

export const uncontrolled = () => (
  <TextareaStory storyName="Uncontrolled" component="Textarea" fileName="examples/Uncontrolled.js">
    <Uncontrolled />
  </TextareaStory>
);
uncontrolled.story = {
  name: "Uncontrolled",
  parameters: actionStoryParameters,
};

export const controlled = () => (
  <TextareaStory storyName="Controlled" component="Textarea" fileName="examples/Controlled.js">
    <Controlled />
  </TextareaStory>
);
controlled.story = {
  name: "Controlled",
  parameters: actionStoryParameters,
};

export const customAttributes = () => (
  <TextareaStory storyName="Custom Attributes" component="Textarea" fileName="examples/CustomAttributes.js">
    <CustomAttributes />
  </TextareaStory>
);
customAttributes.story = {
  name: "Custom Attributes",
  parameters: exampleStoryParameters,
};

export const ref = () => (
  <TextareaStory storyName="Ref" component="Textarea" fileName="examples/Ref.js">
    <Ref />
  </TextareaStory>
);
ref.story = {
  name: "Ref",
  parameters: exampleStoryParameters,
};
