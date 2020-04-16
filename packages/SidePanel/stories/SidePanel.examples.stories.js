import React from "react";
import SidePanel from "../src";
import {
  BasicSidePanel,
  FocusLockSidePanel,
  GroupSidePanel,
  PushContentSidePanel,
  StickyFooterSidePanel,
} from "./examples/Examples";

const sidePanelStoryParameters = {
  viewMode: "story",
  options: {
    isToolshown: false,
    showPanel: false,
    docs: { disable: true },
  },
};

export default {
  title: "SidePanel/Examples",
  component: SidePanel,
};

export const basic = () => <BasicSidePanel />;
basic.story = {
  parameters: sidePanelStoryParameters,
};

export const focuslock = () => <FocusLockSidePanel />;
focuslock.story = {
  parameters: sidePanelStoryParameters,
};

export const group = () => <GroupSidePanel />;
group.story = {
  parameters: sidePanelStoryParameters,
};

export const pushContent = () => <PushContentSidePanel />;
pushContent.story = {
  parameters: sidePanelStoryParameters,
};

export const stickyFooter = () => <StickyFooterSidePanel />;
stickyFooter.story = {
  parameters: sidePanelStoryParameters,
};
