import React from "react";
import { testStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import { getStoryName } from "storybook/storyTree";
import ZIndexExample from "./examples/ZIndex";
import AutoFocusExample from "./examples/AutoFocusExample";
import OverflowMenu from "../src";

const storyName = getStoryName("OverflowMenu");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: OverflowMenu,
};

export const ZIndexStory = () => (
  <ExampleStory storyName="ZIndex Example" component="OverflowMenu" fileName="sandbox/ZIndexExample.js">
    <ZIndexExample />
  </ExampleStory>
);

ZIndexStory.story = {
  name: "Z Index",
  parameters: testStoryParameters,
};

export const autoFocusStory = () => (
  <ExampleStory storyName="Auto-Focus Example" component="OverflowMenu" fileName="sandbox/AutoFocusExample.js">
    <AutoFocusExample />
  </ExampleStory>
);

autoFocusStory.story = {
  name: "Auto-focus",
  parameters: testStoryParameters,
};
