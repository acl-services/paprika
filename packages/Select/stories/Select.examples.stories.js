import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import { SelectStory } from "./Select.stories.styles";
import Uncontrolled from "./examples/Uncontrolled";
import Controlled from "./examples/Controlled";
import CustomAttributes from "./examples/CustomAttributes";
import Ref from "./examples/Ref";

const storyName = getStoryName("Select");

export default {
  title: `${storyName}/Examples`,
};

export const uncontrolled = () => (
  <SelectStory storyName="Uncontrolled" component="Select" fileName="examples/Uncontrolled.js">
    <Uncontrolled />
  </SelectStory>
);
uncontrolled.story = {
  name: "Uncontrolled",
  parameters: exampleStoryParameters,
};

export const controlled = () => (
  <SelectStory storyName="Controlled" component="Select" fileName="examples/Controlled.js">
    <Controlled />
  </SelectStory>
);
controlled.story = {
  name: "Controlled",
  parameters: exampleStoryParameters,
};

export const customAttributes = () => (
  <SelectStory storyName="Custom Attributes" component="Select" fileName="examples/CustomAttributes.js">
    <CustomAttributes />
  </SelectStory>
);
customAttributes.story = {
  name: "Custom Attributes",
  parameters: exampleStoryParameters,
};

export const ref = () => (
  <SelectStory storyName="Ref" component="Select" fileName="examples/Ref.js">
    <Ref />
  </SelectStory>
);
ref.story = {
  name: "Ref",
  parameters: exampleStoryParameters,
};
