import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Tagline } from "storybook/assets/styles/common.styles";
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
    <Tagline>Heading with focus.</Tagline>
    <br />
    <HeadingFocus />
  </ExampleStory>
);
headingFocus.story = { name: "Focus", parameters: exampleStoryParameters };

export const externalLinkExample = () => (
  <ExampleStory storyName="External Link" fileName="examples/ExternalLinkExample.js">
    <Tagline>Heading with ExternalLink.</Tagline>
    <br />
    <ExternalLinkExample />
  </ExampleStory>
);
externalLinkExample.story = { name: "External Link", parameters: exampleStoryParameters };

export const setWidthExample = () => (
  <ExampleStory storyName="Set Width" fileName="examples/SetWidthExample.js">
    <Tagline>Heading with setWidth.</Tagline>
    <br />
    <SetWidthExample />
  </ExampleStory>
);
setWidthExample.story = { name: "Set Width", parameters: exampleStoryParameters };

export const dividerExample = () => (
  <ExampleStory storyName="Divider" fileName="examples/DividerExample.js">
    <Tagline>Heading with Divider.</Tagline>
    <br />
    <DividerExample />
  </ExampleStory>
);
dividerExample.story = { name: "Divider", parameters: exampleStoryParameters };

export const underlineExample = () => (
  <ExampleStory storyName="Underline" fileName="examples/UnderlineExample.js">
    <Tagline>Heading with Underline.</Tagline>
    <br />
    <UnderlineExample />
  </ExampleStory>
);
underlineExample.story = { name: "Underline", parameters: exampleStoryParameters };

export const paragraphExample = () => (
  <ExampleStory storyName="Paragraph" fileName="examples/ParagraphExample.js">
    <Tagline>Heading with Paragraph.</Tagline>
    <br />
    <ParagraphExample />
  </ExampleStory>
);
paragraphExample.story = { name: "Paragraph", parameters: exampleStoryParameters };

export const displayLevelExample = () => (
  <ExampleStory storyName="Display Level" fileName="examples/DisplayLevelExample.js">
    <Tagline>Heading with Display Level.</Tagline>
    <br />
    <DisplayLevelExample />
  </ExampleStory>
);
displayLevelExample.story = { name: "Display Level", parameters: exampleStoryParameters };

export const isLightExample = () => (
  <ExampleStory storyName="Is Light" fileName="examples/IsLightExample.js">
    <Tagline>Heading with isLight.</Tagline>
    <br />
    <IsLightExample />
  </ExampleStory>
);
isLightExample.story = { name: "Is Light", parameters: exampleStoryParameters };
