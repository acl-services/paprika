import React from "react";
import { getStoryName } from "storybook/storyTree";
import {
  BasicSidePanel,
  FocusLockSidePanel,
  GroupSidePanel,
  PushContentSidePanel,
  StickyFooterSidePanel,
  ZIndexSidePanel,
  FocusHeading,
} from "./examples/Examples";
import SidePanel from "../src";

const storyName = getStoryName("SidePanel");

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
  component: SidePanel,
};

export const basic = () => <BasicSidePanel />;
basic.story = sidePanelStoryParameters;

export const focuslock = () => <FocusLockSidePanel />;
focuslock.story = sidePanelStoryParameters;

export const group = () => <GroupSidePanel />;
group.story = sidePanelStoryParameters;

export const pushContent = () => <PushContentSidePanel />;
pushContent.story = sidePanelStoryParameters;

export const stickyFooter = () => <StickyFooterSidePanel />;
stickyFooter.story = sidePanelStoryParameters;

export const zIndex = () => <ZIndexSidePanel />;
zIndex.story = sidePanelStoryParameters;

export const focusHeading = () => <FocusHeading />;
focusHeading.story = sidePanelStoryParameters;
