import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import ProgressBarModal from "./examples/ProgressBarModal";
import Loading from "./examples/Loading";

const storyName = getStoryName("ProgressBar");

export default {
  title: `${storyName}/Examples`,
};

export const loadingExample = () => (
  <ExampleStory storyName="Fake Loading" component="ProgressBar" fileName="examples/Loading.js">
    <Loading />
  </ExampleStory>
);
loadingExample.story = { name: "Fake Loading", parameters: exampleStoryParameters };

export const modalExample = () => (
  <ExampleStory storyName="In a Modal" component="ProgressBar" fileName="examples/ProgressBarModal.js">
    <ProgressBarModal />
  </ExampleStory>
);
modalExample.story = { name: "In a Modal", parameters: exampleStoryParameters };
