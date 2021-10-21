import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Link from "../src/Link";
import NavigationalExample from "./examples/NavigationalExample";

const storyName = getStoryName("Link");

export default {
  title: `${storyName}/Examples`,
  component: Link,
};

export const navigationalexampleExample = (): JSX.Element => (
  <ExampleStory storyName="NavigationalExample" component="Link" fileName="examples/NavigationalExample.js">
    <NavigationalExample />
  </ExampleStory>
);
navigationalexampleExample.story = { name: "NavigationalExample", parameters: exampleStoryParameters };
