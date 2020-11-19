import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ControlledExample from "./examples/Controlled";
import UncontrolledExample from "./examples/Uncontrolled";

const storyName = getStoryName("Radio");

export default {
  title: `${storyName}/Examples`,
};

export const UncontrolledStory = () => (
  <ExampleStory component="Radio" storyName="Uncontrolled Radio" fileName="examples/Uncontrolled.js">
    <UncontrolledExample />
  </ExampleStory>
);
UncontrolledStory.story = {
  name: "Uncontrolled",
  parameters: exampleStoryParameters,
};

export const ControlledStory = () => (
  <ExampleStory component="Radio" storyName="Controlled Radio" fileName="examples/Controlled.js">
    <ControlledExample />
  </ExampleStory>
);
ControlledStory.story = {
  name: "Controlled",
  parameters: exampleStoryParameters,
};
