import React from "react";
import { getStoryName } from "storybook/storyTree";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import Heading from "../src/Heading";
import HeadingFocus from "./examples/HeadingFocus";
import DividerExample from "./examples/DividerExample";
import UnderlineExample from "./examples/UnderlineExample";
import ExternalLinkExample from "./examples/ExternalLinkExample";
import SetWidthExample from "./examples/SetWidthExample";
import ParagraphExample from "./examples/ParagraphExample";
import IsLightExample from "./examples/IsLightExample";
import DisplayLevelExample from "./examples/DisplayLevelExample";

const storyName = getStoryName("Heading");

export default {
  title: `${storyName}/Examples`,
  component: Heading,
};

export const headingFocus = () => (
  <ExampleStory storyName="Focus" fileName="examples/HeadingFocus.js">
    <HeadingFocus />
  </ExampleStory>
);
headingFocus.story = { name: "Focus", parameters: exampleStoryParameters };

export const externalLinkExample = () => (
  <ExampleStory storyName="External Link" fileName="examples/ExternalLinkExample.js">
    <ExternalLinkExample />
  </ExampleStory>
);
externalLinkExample.story = { name: "External Link", parameters: exampleStoryParameters };

export const setWidthExample = () => (
  <ExampleStory storyName="Set Width" fileName="examples/SetWidthExample.js">
    <SetWidthExample />
  </ExampleStory>
);
setWidthExample.story = { name: "Set Width", parameters: exampleStoryParameters };

export const dividerExample = () => (
  <ExampleStory storyName="Divider" fileName="examples/DividerExample.js">
    <DividerExample />
  </ExampleStory>
);
dividerExample.story = { name: "Divider", parameters: exampleStoryParameters };

export const underlineExample = () => (
  <ExampleStory storyName="Underline" fileName="examples/UnderlineExample.js">
    <UnderlineExample />
  </ExampleStory>
);
underlineExample.story = { name: "Underline", parameters: exampleStoryParameters };

export const paragraphExample = () => (
  <ExampleStory storyName="Paragraph" fileName="examples/ParagraphExample.js">
    <ParagraphExample />
  </ExampleStory>
);
paragraphExample.story = { name: "Paragraph", parameters: exampleStoryParameters };

export const displayLevelExample = () => (
  <ExampleStory storyName="Display Level" fileName="examples/DisplayLevelExample.js">
    <DisplayLevelExample />
  </ExampleStory>
);
displayLevelExample.story = { name: "Display Level", parameters: exampleStoryParameters };

export const isLightExample = () => (
  <ExampleStory storyName="Is Light" fileName="examples/IsLightExample.js">
    <IsLightExample />
  </ExampleStory>
);
isLightExample.story = { name: "Is Light", parameters: exampleStoryParameters };
