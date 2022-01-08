import React from "react";
import { testStoryParameters } from "storybook/assets/storyParameters";
import OverflowMenuExample from "./examples/OverflowMenuExample";
import { getStoryName } from "storybook/storyTree";
import OverflowMenu from "../src";

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

