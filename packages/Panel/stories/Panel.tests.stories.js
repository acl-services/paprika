import React from "react";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { getStoryName } from "storybook/storyTree";
import { PanelFocusLockDisabled, PanelFooterSticky, PanelOnAfter, PanelDefaultSticky } from "./tests/Cypress";
import Screener from "./tests/Screener";
import Panel from "../src";

const storyName = getStoryName("Panel");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "panel-tests",
  component: Panel,
};

export const ScreenerStory = () => <Screener />;

ScreenerStory.story = {
  name: "Screener",
  parameters: testStoryParameters,
};

export const PanelDefaultStickyStory = () => <PanelDefaultSticky />;

PanelDefaultStickyStory.story = {
  name: "Panel Sticky",
  parameters: testStoryParameters,
};

export const PanelOnAfterStory = () => <PanelOnAfter />;

PanelOnAfterStory.story = {
  name: "Panel OnAfter",
  parameters: testStoryParameters,
};

export const PanelFocusLockDisabledStory = () => <PanelFocusLockDisabled />;

PanelFocusLockDisabledStory.story = {
  name: "Panel Focus Lock",
  parameters: testStoryParameters,
};

export const PanelFooterStickyStory = () => <PanelFooterSticky />;

PanelFooterStickyStory.story = {
  name: "Panel Footer Sticky",
  parameters: testStoryParameters,
};
