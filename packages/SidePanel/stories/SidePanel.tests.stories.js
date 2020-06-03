import React from "react";
import { getStoryName } from "storybook/storyTree";
import Screener from "./examples/Screener";
import {
  SidePanelDefaultSticky,
  SidePanelOnAfter,
  SidePanelFooterSticky,
  SidePanelFocusLockDisabled,
} from "./examples/Cypress";

export default {
  title: `${getStoryName("SidePanel")}/Backyard/Tests`,
};

export const screener = () => <Screener />;
export const sidePanelDefaultSticky = () => <SidePanelDefaultSticky />;
export const sidePanelOnAfter = () => <SidePanelOnAfter />;
export const sidePanelFooterSticky = () => <SidePanelFooterSticky />;
export const sidePanelFocusLockDisabled = () => <SidePanelFocusLockDisabled />;
