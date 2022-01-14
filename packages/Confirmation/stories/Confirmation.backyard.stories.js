import { testStoryParameters } from "storybook/assets/storyParameters";
import { getStoryName } from "storybook/storyTree";
import Confirmation from "../src";
import Screener from "./examples/Screener";

const storyName = getStoryName("Confirmation");

export default {
  title: `${storyName}/Backyard/Screener`,
  component: Confirmation,
};

export const ScreenerStory = Screener;

ScreenerStory.story = {
  name: "Screener",
  parameters: testStoryParameters,
};
