import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Open, Selected, AllOptionsAreSelected } from "./examples/ExamplesForScreen.stories";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: storyName,
};

export const ScreenerOpen = () => <Open />;
export const ScreenerSelected = () => <Selected />;
export const ScreenerAllOptionsSelected = () => <AllOptionsAreSelected />;
