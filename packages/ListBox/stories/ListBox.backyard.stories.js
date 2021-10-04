import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import DirectoryExample from "./sandbox/Directory/Directory";
import FilterSelectExample from "./sandbox/FilterSelect/FilterSelect";
import LongListExample from "./sandbox/LongList/LongList";
import CollapsedContainerExample from "./sandbox/CollapsedContainer";
import Lazy from "./sandbox/LazyListBox/Lazy";
import ListBox from "../src";

const storyName = getStoryName("ListBox");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: ListBox,
};

export const LongListStory = () => (
  <ExampleStory storyName="Long List" component="ListBox" fileName="sandbox/LongList/LongList.js">
    <LongListExample />
  </ExampleStory>
);

LongListStory.story = {
  name: "Long List",
  parameters: {
    ...exampleStoryParameters,
  },
};

export const FilterSelectStory = () => (
  <ExampleStory storyName="Filter Select" component="ListBox" fileName="sandbox/FilterSelect/FilterSelect.js">
    <FilterSelectExample />
  </ExampleStory>
);

FilterSelectStory.story = {
  name: "Filter Select",
  parameters: {
    ...exampleStoryParameters,
  },
};

export const ListBoxDirectoryStory = () => (
  <ExampleStory storyName="Directory" component="ListBox" fileName="sandbox/Directory/Directory.js">
    <DirectoryExample />
  </ExampleStory>
);

ListBoxDirectoryStory.story = {
  name: "Directory",
  parameters: {
    ...exampleStoryParameters,
  },
};

export const LazyStory = () => (
  <ExampleStory component="ListBox" storyName="Lazy ListBox" fileName="sandbox/LazyListBox/Lazy.js">
    <Lazy />
  </ExampleStory>
);

LazyStory.story = {
  name: "Lazy Load API",
  parameters: {
    ...exampleStoryParameters,
  },
};

export const CollapsedContainerStory = () => (
  <ExampleStory component="ListBox" storyName="Collapsed Container ListBox" fileName="sandbox/CollapsedContainer.js">
    <CollapsedContainerExample />
  </ExampleStory>
);

CollapsedContainerStory.story = {
  name: "Collapsed Container",
  parameters: {
    ...exampleStoryParameters,
  },
};
