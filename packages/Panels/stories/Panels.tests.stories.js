import React from "react";
import { getStoryName } from "storybook/storyTree";
import Screener from "./examples/Screener";
import { PanelsDefaultSticky, PanelsOnAfter, PanelsFooterSticky, PanelsFocusLockDisabled } from "./examples/Cypress";

const storyName = getStoryName("Panels");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "panels-tests",
};

export const screener = () => <Screener />;
export const sidePanelDefaultSticky = () => <PanelsDefaultSticky />;
export const sidePanelOnAfter = () => <PanelsOnAfter />;
export const sidePanelFooterSticky = () => <PanelsFooterSticky />;
export const sidePanelFocusLockDisabled = () => <PanelsFocusLockDisabled />;
