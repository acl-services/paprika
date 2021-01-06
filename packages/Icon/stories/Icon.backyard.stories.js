import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import InlineTest from "./sandbox/InlineTest";

const storyName = getStoryName("Icon");

export default {
  title: `${storyName}/Backyard/Sandbox`,
};

export const InlineIconStory = () => (
  <ExampleStory storyName="Inline test" component="Icon" fileName="sandbox/InlineTest.js">
    <InlineTest />
  </ExampleStory>
);

InlineIconStory.story = {
  name: "Inline Test",
  parameters: {
    ...testStoryParameters,
  },
};
