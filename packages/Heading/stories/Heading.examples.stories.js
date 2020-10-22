import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import Heading from "../src/Heading";
import HeadingFocus from "./examples/HeadingFocus";
import Divider from "./examples/Divider";
import Underline from "./examples/Underline";
import ExternalLink from "./examples/ExternalLink";
import Paragraph from "./examples/Paragraph";
import IsLight from "./examples/IsLight";
import DisplayLevel from "./examples/DisplayLevel";

const storyName = getStoryName("Heading");

export default {
  title: `${storyName}/Examples`,
  component: Heading,
};

export const paragraphExample = () => (
  <ExampleStory storyName="With Paragraphs" fileName="examples/Paragraph.js">
    <Paragraph />
  </ExampleStory>
);
paragraphExample.story = { name: "Paragraph", parameters: exampleStoryParameters };

export const displayLevelExample = () => (
  <ExampleStory storyName="Display Level" fileName="examples/DisplayLevel.js">
    <DisplayLevel />
  </ExampleStory>
);
displayLevelExample.story = { name: "Display Level", parameters: exampleStoryParameters };

export const isLightExample = () => (
  <ExampleStory storyName="Is Light" fileName="examples/IsLight.js">
    <IsLight />
  </ExampleStory>
);
isLightExample.story = { name: "Is Light", parameters: exampleStoryParameters };

export const underlineExample = () => (
  <ExampleStory storyName="Underline" fileName="examples/Underline.js">
    <Underline />
  </ExampleStory>
);
underlineExample.story = { name: "Underline", parameters: exampleStoryParameters };

export const dividerExample = () => (
  <ExampleStory storyName="Divider" fileName="examples/Divider.js">
    <Divider />
  </ExampleStory>
);
dividerExample.story = { name: "Divider", parameters: exampleStoryParameters };

export const headingFocus = () => (
  <ExampleStory storyName="Focus" fileName="examples/HeadingFocus.js">
    <HeadingFocus />
  </ExampleStory>
);
headingFocus.story = { name: "Focus", parameters: exampleStoryParameters };

export const externalLinkExample = () => (
  <ExampleStory storyName="External Link" fileName="examples/ExternalLink.js">
    <ExternalLink />
  </ExampleStory>
);
externalLinkExample.story = { name: "External Link", parameters: exampleStoryParameters };
