import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import InlineTest from "./sandbox/InlineTest";

const storyName = getStoryName("Icon");

export default {
  title: `${storyName}/Backyard/Sandbox`,
};

export const ScrollContainerStory = () => (
  <ExampleStory storyName="Inline test" component="Icon" fileName="sandbox/InlineTest.js">
    <InlineTest />
  </ExampleStory>
);

ScrollContainerStory.story = {
  name: "Inline Test",
  parameters: {
    ...testStoryParameters,
    options: {
      ...testStoryParameters.options,
      showPanel: true,
      panelPosition: "bottom",
    },
  },
};
