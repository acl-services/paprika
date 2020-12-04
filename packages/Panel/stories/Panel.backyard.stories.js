import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import WithSortable from "./sandbox/WithSortable";
import Panel from "../src";

const storyName = getStoryName("Panel");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: Panel,
};

export const WithSortableStory = () => (
  <ExampleStory storyName="With Sortable" component="Panel" fileName="sandbox/WithSortable.js">
    <WithSortable />
  </ExampleStory>
);

WithSortableStory.story = {
  name: "With Sortable",
  parameters: testStoryParameters,
};
