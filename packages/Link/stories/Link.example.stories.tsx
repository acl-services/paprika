import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Link from "../src/Link";
import NavigationalExample from "./examples/MenuExample";

const storyName = getStoryName("Link");

export default {
  title: `${storyName}/Examples`,
  component: Link,
};

export const menuExample = (): JSX.Element => (
  <ExampleStory storyName="MenuExample" component="Link" fileName="examples/MenuExample.js">
    <NavigationalExample />
  </ExampleStory>
);
menuExample.story = { name: "MenuExample", parameters: exampleStoryParameters };
