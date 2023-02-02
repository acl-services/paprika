import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import AlterCopiedTextExample from "./examples/AlterCopiedText";
import ControlledExample from "./examples/Controlled";
import UncontrolledExample from "./examples/Uncontrolled";

const storyName = getStoryName("CopyInput");

export default {
  title: `${storyName}/Examples`,
};

export const UncontrolledStory = () => (
  <ExampleStory component="CopyInput" storyName="Uncontrolled CopyInput" fileName="examples/Uncontrolled.js">
    <UncontrolledExample />
  </ExampleStory>
);
UncontrolledStory.story = {
  name: "Uncontrolled",
  parameters: exampleStoryParameters,
};

export const ControlledStory = () => (
  <ExampleStory component="CopyInput" storyName="Controlled CopyInput" fileName="examples/Controlled.js">
    <ControlledExample />
  </ExampleStory>
);
ControlledStory.story = {
  name: "Controlled",
  parameters: exampleStoryParameters,
};

export const AlterCopiedTextStory = () => (
  <ExampleStory component="CopyInput" storyName="Alter copied text" fileName="examples/AlterCopiedText.js">
    <AlterCopiedTextExample />
  </ExampleStory>
);
AlterCopiedTextStory.story = {
  name: "Alter copied text",
  parameters: exampleStoryParameters,
};
