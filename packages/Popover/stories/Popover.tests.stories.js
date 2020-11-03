import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "./storyHelpers";
import Cypress, { propHandles } from "./backyard/tests/Cypress";
import Screener from "./backyard/tests/Screener";
import Popover from "../src/Popover";

const storyName = getStoryName("Popover");

export default {
  title: `${storyName}/Backyard/Tests`,
  component: Popover,
};

export const cypress = Cypress;
cypress.story = {
  name: "Cypress",
  parameters: exampleStoryParameters,
  decorators: [propHandles],
};

export const screener = Screener;
screener.story = { name: "Screener", parameters: exampleStoryParameters };
