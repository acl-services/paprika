import React from "react";
import { getStoryName } from "storybook/storyTree";
import {
  BasicPanels,
  FocusLockPanels,
  GroupPanels,
  PushContentPanels,
  StickyFooterPanels,
  StickyHeaderPanels,
  ZIndexPanels,
  FocusHeading,
  WithSortable,
} from "./examples/Examples";
import Panels from "../src";

const storyName = getStoryName("Panels");

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
  component: Panels,
};

export const basic = () => <BasicPanels />;
basic.story = sidePanelStoryParameters;

export const focuslock = () => <FocusLockPanels />;
focuslock.story = sidePanelStoryParameters;

export const group = () => <GroupPanels />;
group.story = sidePanelStoryParameters;

export const pushContent = () => <PushContentPanels />;
pushContent.story = sidePanelStoryParameters;

export const stickyFooter = () => <StickyFooterPanels />;
stickyFooter.story = sidePanelStoryParameters;

export const stickyHeader = () => <StickyHeaderPanels />;
stickyHeader.story = sidePanelStoryParameters;

export const zIndex = () => <ZIndexPanels />;
zIndex.story = sidePanelStoryParameters;

export const focusHeading = () => <FocusHeading />;
focusHeading.story = sidePanelStoryParameters;

export const withSortable = () => <WithSortable />;
withSortable.story = sidePanelStoryParameters;
