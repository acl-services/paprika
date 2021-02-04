import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import OnChange from "./examples/OnChange";
import Lazy from "./examples/LazyListBox/Lazy";
import ListBox from "../src";

const storyName = getStoryName("ListBox");

export default {
  title: `${storyName}/Examples`,
  component: ListBox,
};

export const OnChangeStory = () => (
  <ExampleStory component="ListBox" storyName="ListBox onChange" fileName="examples/OnChange.js">
    <OnChange />
  </ExampleStory>
);

export const LazyStory = () => (
  <ExampleStory component="ListBox" storyName="Lazy ListBox" fileName="examples/Lazy.js">
    <Lazy />
  </ExampleStory>
);
