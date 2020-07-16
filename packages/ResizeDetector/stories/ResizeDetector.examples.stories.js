import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Gap } from "storybook/assets/styles/common.styles";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import { FullHeightStory } from "./examples/Basic";
import { CustomBreakpointsStory, NoSmallStory, NoLargeStory } from "./examples/Breakpoints";
import { OnBreakStory } from "./examples/Callbacks";
import { DebounceSlowStory, DebounceFastStory } from "./examples/Debounce";
import ResizeDetector from "../src";

const storyName = getStoryName("ResizeDetector");

export default {
  title: `${storyName}/Examples`,
  component: ResizeDetector,
};

export const basic = () => (
  <ExampleStory storyName="Basic Example" fileName="examples/Basic.js">
    <p>
      <code>isFullHeight = true</code>
    </p>
    <FullHeightStory />
  </ExampleStory>
);
basic.story = { name: "Basic", parameters: exampleStoryParameters };

export const breakpoints = () => (
  <ExampleStory storyName="Custom Breakpoints" fileName="examples/Breakpoints.js">
    <p>
      <code>breakpointSmall = 100</code>
      <br />
      <code>breakpointLarge = 200</code>
    </p>
    <CustomBreakpointsStory />
    <Gap.Large />
    <p>
      <code>breakpointSmall = 0 | null</code>
    </p>
    <NoSmallStory />
    <Gap.Large />
    <p>
      <code>breakpointLarge = 0 | null</code>
    </p>
    <NoLargeStory />
  </ExampleStory>
);
breakpoints.story = { name: "with breakpoints", parameters: exampleStoryParameters };

export const callbacks = () => (
  <ExampleStory storyName="Callback Example" tagline="Pop goes the <Toast>!" fileName="examples/Callbacks.js">
    <OnBreakStory />
  </ExampleStory>
);
callbacks.story = { name: "with onBreak callback", parameters: exampleStoryParameters };

export const debounce = () => (
  <ExampleStory storyName="Debounce Examples" fileName="examples/Debounce.js">
    <p>
      <code>debounceDelay = 300</code>
    </p>
    <DebounceSlowStory />
    <Gap.Large />
    <p>
      <code>debounceDelay = 0</code>
    </p>
    <DebounceFastStory />
  </ExampleStory>
);
debounce.story = { name: "with debounceDelay", parameters: exampleStoryParameters };
