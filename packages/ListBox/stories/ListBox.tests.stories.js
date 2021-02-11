import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { SingleListBox, CustomFilter, WithContainerScroll } from "./tests/SingleListBox";
import { MultiWithFilter } from "./tests/MultiListBox";

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
