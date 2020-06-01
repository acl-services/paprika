import React from "react";
import SidePanel from "../src";
import {
  BasicSidePanel,
  FocusLockSidePanel,
  GroupSidePanel,
  PushContentSidePanel,
  StickyFooterSidePanel,
  ZIndexSidePanel,
} from "./examples/Examples";

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
  title: "SidePanel/Examples",
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
