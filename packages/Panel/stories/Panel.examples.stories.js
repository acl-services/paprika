import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import BasicPanel from "./examples/BasicPanel";
import FocusHeading from "./examples/FocusHeading";
import FocusLockPanel from "./examples/FocusLockPanel";
import FromBottom from "./examples/FromBottom";
import GroupPanel from "./examples/GroupPanel";
import PushContentPanel from "./examples/PushContentPanel";
import StickyPanel from "./examples/StickyPanel";
import NestedPopoverPanel from "./examples/NestedPopoverPanel";

import Panel from "../src";

const storyName = getStoryName("Panel");

const sidePanelStoryParameters = {
  parameters: {
    viewMode: "story",
    options: {
      isToolshown: false,
      showPanel: false,
      docs: { disable: true },
    },
  },
};

export default {
  title: `${storyName}/Examples`,
  component: Panel,
};

export const basic = () => (
  <ExampleStory component="Panel" storyName="Basic Panel" fileName="examples/BasicPanel.js">
    <BasicPanel />
  </ExampleStory>
);

basic.story = sidePanelStoryParameters;

export const focusHeading = () => (
  <ExampleStory component="Panel" storyName="Focus Heading Panel" fileName="examples/FocusHeading.js">
    <FocusHeading />
  </ExampleStory>
);

focusHeading.story = sidePanelStoryParameters;

export const focusLock = () => (
  <ExampleStory component="Panel" storyName="Focus Lock Panel" fileName="examples/FocusLockpanel.js">
    <FocusLockPanel />
  </ExampleStory>
);

focusLock.story = sidePanelStoryParameters;

export const fromBottom = () => (
  <ExampleStory component="Panel" storyName="From Bottom Panel" fileName="examples/FromBottom.js">
    <FromBottom />
  </ExampleStory>
);

fromBottom.story = sidePanelStoryParameters;

export const groupPanel = () => (
  <ExampleStory component="Panel" storyName="Group Panel" fileName="examples/GroupPanel.js">
    <GroupPanel />
  </ExampleStory>
);

groupPanel.story = sidePanelStoryParameters;

export const pushContentPanel = () => (
  <ExampleStory component="Panel" storyName="Panel push content" fileName="examples/PushContentPanel.js">
    <PushContentPanel />
  </ExampleStory>
);

pushContentPanel.story = sidePanelStoryParameters;

export const stickyPanel = () => (
  <ExampleStory component="Panel" storyName="Sticky Panel" fileName="examples/StickyPanel.js">
    <StickyPanel />
  </ExampleStory>
);

stickyPanel.story = sidePanelStoryParameters;

export const nestedPopover = () => (
  <ExampleStory component="Panel" storyName="Panel with nested Popover" fileName="examples/NestedPopover.js">
    <NestedPopoverPanel />
  </ExampleStory>
);

nestedPopover.story = sidePanelStoryParameters;
