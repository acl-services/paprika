import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { SingleListBox, CustomFilter, WithContainerScroll } from "./tests/SingleListBox";
import { MultiWithFilter } from "./tests/MultiListBox";
import { A11yMultiStory, A11ySingleStory } from "./tests/A11yStory";

import ListBox from "../src";

const storyName = getStoryName("ListBox");

export default {
  title: `${storyName}/Backyard/Tests`,
  component: ListBox,
};

export const SingleListBoxStory = SingleListBox;
SingleListBoxStory.story = {
  name: "Cypress SingleListBox Test",
  parameters: testStoryParameters,
};

export const CustomFilterStory = CustomFilter;
CustomFilterStory.story = {
  name: "Cypress CustomFilter Test",
  parameters: testStoryParameters,
};

export const WithContainerScrollStory = WithContainerScroll;
WithContainerScrollStory.story = {
  name: "Cypress ContainerScroll Test",
  parameters: testStoryParameters,
};

export const MultiWithFilterStory = MultiWithFilter;
MultiWithFilterStory.story = {
  name: "Cypress MultiWithFilter Test",
  parameters: testStoryParameters,
};

export const A11yTestsStory = A11yMultiStory;
A11yTestsStory.story = {
  name: "Cypress A11y Test",
  parameters: testStoryParameters,
};

export const A11ySingleTestsStory = A11ySingleStory;
A11ySingleTestsStory.story = {
  name: "Cypress A11y Single Test",
  parameters: testStoryParameters,
};
