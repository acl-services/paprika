import React from "react";
import { getStoryName } from "storybook/storyTree";
import {
  BasicPanel,
  FocusLockPanel,
  GroupPanel,
  PushContentPanel,
  StickyFooterPanel,
  StickyHeaderPanel,
  ZIndexPanel,
  FocusHeading,
  WithSortable,
} from "./examples/Examples";
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

export const basic = () => <BasicPanel />;
basic.story = sidePanelStoryParameters;

export const focuslock = () => <FocusLockPanel />;
focuslock.story = sidePanelStoryParameters;

export const group = () => <GroupPanel />;
group.story = sidePanelStoryParameters;

export const pushContent = () => <PushContentPanel />;
pushContent.story = sidePanelStoryParameters;

export const stickyFooter = () => <StickyFooterPanel />;
stickyFooter.story = sidePanelStoryParameters;

export const stickyHeader = () => <StickyHeaderPanel />;
stickyHeader.story = sidePanelStoryParameters;

export const zIndex = () => <ZIndexPanel />;
zIndex.story = sidePanelStoryParameters;

export const focusHeading = () => <FocusHeading />;
focusHeading.story = sidePanelStoryParameters;

export const withSortable = () => <WithSortable />;
withSortable.story = sidePanelStoryParameters;
