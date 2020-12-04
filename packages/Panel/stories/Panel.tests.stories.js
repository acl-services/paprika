import React from "react";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import PanelFocusLockDisabled from "./tests/PanelFocusLockDisabled";
import PanelFooterSticky from "./tests/PanelFooterSticky";
import PanelOnAfter from "./tests/PanelOnAfter";
import PanelDefaultSticky from "./tests/PanelDefaultSticky";
import Screener from "./tests/Screener";
import Panel from "../src";

const storyName = getStoryName("Panel");

export default {
  title: `${storyName}/Backyard/Tests`,
  component: Panel,
};

export const ScreenerStory = () => (
  <ExampleStory storyName="Screener" component="Panel" fileName="tests/Screener.js">
    <Screener />
  </ExampleStory>
);

ScreenerStory.story = {
  name: "Screener",
  parameters: testStoryParameters,
};

export const PanelDefaultStickyStory = () => (
  <ExampleStory storyName="Focus Management" component="Panel" fileName="tests/PanelDefaultSticky.js">
    <PanelDefaultSticky />
  </ExampleStory>
);

PanelDefaultStickyStory.story = {
  name: "Panel Sticky",
  parameters: testStoryParameters,
};

export const PanelOnAfterStory = () => (
  <ExampleStory storyName="Panel OnAfter" component="Panel" fileName="tests/PanelOnAfter.js">
    <PanelOnAfter />
  </ExampleStory>
);

PanelOnAfterStory.story = {
  name: "Panel OnAfter",
  parameters: testStoryParameters,
};

export const PanelFocusLockDisabledStory = () => (
  <ExampleStory storyName="Panel Focus Lock" component="Panel" fileName="tests/PanelFocusLockDisabled.js">
    <PanelFocusLockDisabled />
  </ExampleStory>
);

PanelFocusLockDisabledStory.story = {
  name: "Panel Focus Lock",
  parameters: testStoryParameters,
};

export const PanelFooterStickyStory = () => (
  <ExampleStory storyName="Panel Footer Sticky" component="Panel" fileName="tests/PanelFooterSticky.js">
    <PanelFooterSticky />
  </ExampleStory>
);

PanelFooterStickyStory.story = {
  name: "Panel Footer Sticky",
  parameters: testStoryParameters,
};
