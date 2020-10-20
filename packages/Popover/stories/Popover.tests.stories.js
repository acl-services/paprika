import React from "react";
import { getStoryName } from "storybook/storyTree";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import Cypress from "./backyard/tests/Cypress";
import Screener from "./backyard/tests/Screener";
import Popover from "../src/Popover";

const storyName = getStoryName("Popover");

export default {
  title: `${storyName}/Backyard/Tests`,
  component: Popover,
};

export const cypress = () => (
  <ExampleStory storyName="Cypress" fileName="examples/Cypress.js">
    <Cypress />
  </ExampleStory>
);
cypress.story = { name: "Cypress", parameters: exampleStoryParameters };

export const screener = () => (
  <ExampleStory storyName="Screener" fileName="examples/Screener.js">
    <Screener />
  </ExampleStory>
);
screener.story = { name: "Screener", parameters: exampleStoryParameters };
