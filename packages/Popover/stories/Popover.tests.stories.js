import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import Cypress, { propHandles } from "./tests/Cypress";
import Screener from "./tests/Screener";
import Popover from "../src";

const storyName = getStoryName("Popover");

export default {
  title: `${storyName}/Backyard/Tests`,
  component: Popover,
};

export const cypress = Cypress;
cypress.story = {
  name: "Cypress",
  decorators: [propHandles],
  parameters: testStoryParameters,
};

export const screener = Screener;
screener.story = {
  name: "Screener",
  parameters: testStoryParameters,
};
