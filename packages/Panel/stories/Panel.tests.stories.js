import React from "react";
import { getStoryName } from "storybook/storyTree";
import Screener from "./examples/Screener";
import { PanelDefaultSticky, PanelOnAfter, PanelFooterSticky, PanelFocusLockDisabled } from "./examples/Cypress";

const storyName = getStoryName("Panel");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "panel-tests",
};

export const screener = () => <Screener />;
export const sidePanelDefaultSticky = () => <PanelDefaultSticky />;
export const sidePanelOnAfter = () => <PanelOnAfter />;
export const sidePanelFooterSticky = () => <PanelFooterSticky />;
export const sidePanelFocusLockDisabled = () => <PanelFocusLockDisabled />;
