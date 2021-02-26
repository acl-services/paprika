import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import Sizes from "./examples/Sizes";
import Footer from "./examples/UncontrolledFooter";
import { Open, Selected, AllOptionsAreSelected } from "./examples/Screener";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: `${storyName}/Backyard/Tests`,
};

export const ScreenerOpen = () => <Open />;
ScreenerOpen.story = { name: "Screener - Open", parameters: testStoryParameters };

export const ScreenerSelected = () => <Selected />;
ScreenerSelected.story = { name: "Screener - Selected", parameters: testStoryParameters };

export const ScreenerAllOptionsSelected = () => <AllOptionsAreSelected />;
ScreenerAllOptionsSelected.story = { name: "Screener - All Selected", parameters: testStoryParameters };

export const ListBoxWithTagsScreener = () => <Sizes />;
ListBoxWithTagsScreener.story = { name: "Screener - Sizes", parameters: testStoryParameters };

export const ListBoxWithTagsFooterScreener = () => <Footer isOpen />;
ListBoxWithTagsFooterScreener.story = { name: "Screener - Footer", parameters: testStoryParameters };
