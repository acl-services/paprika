import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import { Gap } from "storybook/assets/styles/common.styles";
import ExampleStory from "storybook/components/ExampleStory";
import Alignment from "./examples/Alignment";
import Breadcrumbs from "../src";

export default {
  title: `${getStoryName("Breadcrumbs")}/Examples`,
  component: Breadcrumbs,
};

export const alignment = () => (
  <ExampleStory storyName="Alignment" component="Breadcrumbs" fileName="examples/Alignment.js">
    <Gap.Small />
    <Alignment />
  </ExampleStory>
);
alignment.story = {
  name: "Alignment",
  parameters: exampleStoryParameters,
};
