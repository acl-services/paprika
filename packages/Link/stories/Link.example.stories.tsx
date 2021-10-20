import React from "react";
    // @ts-ignore

import { getStoryName } from "storybook/storyTree";
    // @ts-ignore

import { exampleStoryParameters } from "storybook/assets/storyParameters";
    // @ts-ignore

import ExampleStory from "storybook/components/ExampleStory";
import Link from "../src/Link";
import NavigationalExample from "./examples/NavigationalExample";

const storyName = getStoryName("Link");

export default {
  title: `${storyName}/Examples`,
  component: Link,
};

export const navigationalexampleExample = () => (
  <ExampleStory storyName="NavigationalExample" component="Link" fileName="examples/NavigationalExample.js">
    <NavigationalExample />
  </ExampleStory>
);
navigationalexampleExample.story = { name: "NavigationalExample", parameters: exampleStoryParameters };
