import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters, actionStoryParameters } from "storybook/assets/storyParameters";
import { InputStory } from "./Input.stories.styles";
import Uncontrolled from "./examples/Uncontrolled";
import Controlled from "./examples/Controlled";
import Types from "./examples/Types";
import CustomAttributes from "./examples/CustomAttributes";
import Ref from "./examples/Ref";
import OldRef from "./examples/OldRef";

const storyName = getStoryName("Input");

export default {
  title: `${storyName}/Examples`,
};

export const uncontrolled = () => (
  <InputStory storyName="Uncontrolled" component="Input" fileName="examples/Uncontrolled.js">
    <Uncontrolled />
  </InputStory>
);
uncontrolled.story = {
  name: "Uncontrolled",
  parameters: actionStoryParameters,
};

export const controlled = () => (
  <InputStory storyName="Controlled" component="Input" fileName="examples/Controlled.js">
    <Controlled />
  </InputStory>
);
controlled.story = {
  name: "Controlled",
  parameters: actionStoryParameters,
};

export const types = () => (
  <InputStory storyName="Types" component="Input" fileName="examples/Types.js">
    <Types />
  </InputStory>
);
types.story = {
  name: "Types",
  parameters: exampleStoryParameters,
};

export const customAttributes = () => (
  <InputStory storyName="Custom Attributes" component="Input" fileName="examples/CustomAttributes.js">
    <CustomAttributes />
  </InputStory>
);
customAttributes.story = {
  name: "Custom Attributes",
  parameters: exampleStoryParameters,
};

export const ref = () => (
  <InputStory storyName="Ref" component="Input" fileName="examples/Ref.js">
    <Ref />
  </InputStory>
);
ref.story = {
  name: "Ref",
  parameters: exampleStoryParameters,
};

export const oldref = () => (
  <InputStory storyName="Old Ref" component="Input" fileName="examples/OldRef.js">
    <OldRef />
  </InputStory>
);
oldref.story = {
  name: "Old Ref",
  parameters: exampleStoryParameters,
};
