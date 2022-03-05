import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import L10n from "@paprika/l10n";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import OverflowMenuExample from "./examples/OverflowMenuExample";
import OverflowMenuMultiConfirmationExample from "./examples/OverflowMenuMultiConfirmationExample";
import OverflowMenuDividersExample from "./examples/OverflowMenuDividersExample";
import OverflowMenuLongestExample from "./examples/OverflowMenuLongestExample";
import OverflowMenuTriggerExample from "./examples/OverflowMenuTriggerExample";
import OverflowMenuOnCloseExample from "./examples/OverflowMenuOnCloseExample";
import OverflowMenuWithCustomClassExample from "./examples/OverflowMenuWithCustomClassExample";
import OverflowMenu from "../src";

const storyName = getStoryName("OverflowMenu");

export default {
  title: `${storyName}/Examples`,
  component: OverflowMenu,
};

export const basic = () => (
  <ExampleStory component="OverflowMenu" storyName="Basic" fileName="examples/OverflowMenuExample.js">
    <OverflowMenuExample />
  </ExampleStory>
);

basic.story = exampleStoryParameters;

export const locale = () => (
  <ExampleStory component="OverflowMenu" storyName="Locale" fileName="examples/OverflowMenuExample.js">
    <L10n locale="zh">
      <OverflowMenuExample />
    </L10n>
  </ExampleStory>
);

locale.story = exampleStoryParameters;

export const modals = () => (
  <ExampleStory component="OverflowMenu" storyName="Modals" fileName="examples/OverflowMenuMultiConfirmationExample.js">
    <OverflowMenuMultiConfirmationExample />
  </ExampleStory>
);

modals.story = { name: "Multiple Confirmations", parameters: exampleStoryParameters };

export const dividers = () => (
  <ExampleStory component="OverflowMenu" storyName="Dividers" fileName="examples/OverflowMenuDividersExample.js">
    <OverflowMenuDividersExample />
  </ExampleStory>
);

dividers.story = exampleStoryParameters;

export const longestStory = () => (
  <ExampleStory component="OverflowMenu" storyName="Longest Story" fileName="examples/OverflowMenuLongestExample.js">
    <OverflowMenuLongestExample />
  </ExampleStory>
);

longestStory.story = exampleStoryParameters;

export const triggerExamples = () => (
  <ExampleStory component="OverflowMenu" storyName="Trigger Examples" fileName="examples/OverflowMenuTriggerExample.js">
    <OverflowMenuTriggerExample />
  </ExampleStory>
);

triggerExamples.story = exampleStoryParameters;

export const onClose = () => (
  <ExampleStory component="OverflowMenu" storyName="onClose Examples" fileName="examples/OverflowMenuOnCloseExample.js">
    <OverflowMenuOnCloseExample />
  </ExampleStory>
);

onClose.story = exampleStoryParameters;

export const popoverContent = () => (
  <ExampleStory
    component="OverflowMenu"
    storyName="Popover Content"
    fileName="examples/OverflowMenuWithCustomClassExample.js"
  >
    <OverflowMenuWithCustomClassExample />
  </ExampleStory>
);

popoverContent.story = { name: "Custom class on Popover Content", parameters: exampleStoryParameters };
