import React from "react";
import { testStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import { getStoryName } from "storybook/storyTree";
import ZIndexExample from "./examples/ZIndexExample";
import AutoFocusExample from "./examples/AutoFocusExample";
import WebComponentExample from "./examples/OverflowMenuWebComponentExample";
import OverflowMenu from "../src";

const storyName = getStoryName("OverflowMenu");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: OverflowMenu,
};

export const ZIndexStory = () => (
  <ExampleStory storyName="ZIndex Example" component="OverflowMenu" fileName="examples/ZIndexExample.js">
    <ZIndexExample />
  </ExampleStory>
);
ZIndexStory.story = {
  name: "Z Index",
  parameters: testStoryParameters,
};

export const autoFocusStory = () => (
  <ExampleStory storyName="Auto-Focus Example" component="OverflowMenu" fileName="examples/AutoFocusExample.js">
    <AutoFocusExample />
  </ExampleStory>
);
autoFocusStory.story = {
  name: "Auto-focus",
  parameters: testStoryParameters,
};

export const webComponentStory = () => (
  <ExampleStory storyName="Web Component Example" component="OverflowMenu" fileName="examples/WebComponentExample.js">
    <WebComponentExample />
  </ExampleStory>
);
webComponentStory.story = {
  name: "Web Component",
  parameters: testStoryParameters,
};
