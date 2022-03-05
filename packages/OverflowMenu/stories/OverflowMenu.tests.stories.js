import React from "react";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { getStoryName } from "storybook/storyTree";
import OverflowMenuExample from "./examples/OverflowMenuExample";
import OverflowMenu from "../src";
import Screener from "./examples/Screener";

const storyName = getStoryName("OverflowMenu");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "overflowmenu-tests",
  component: OverflowMenu,
};

export const Cypress = () => <OverflowMenuExample />;

Cypress.story = {
  name: "Cypress",
  parameters: testStoryParameters,
};

export const screener = () => <Screener />;
screener.story = { name: "Screener", parameters: testStoryParameters };
