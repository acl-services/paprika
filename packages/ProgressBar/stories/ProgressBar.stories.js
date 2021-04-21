import React from "react";
// import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Showcase from "./examples/Showcase";
// import ProgressBarModal from "./examples/ProgressBarModal";
// import Screener from "./examples/Screener";
// import Loading from "./examples/Loading";

const storyName = getStoryName("ProgressBar");

export default {
  title: storyName,
};

export const showcase = () => (
  <ExampleStory storyName="ProgressBar" tagline={ExampleStory.defaultTaglines.showcase}>
    <Showcase />
  </ExampleStory>
);
showcase.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};

// storiesOf(storyName, module)
//   .addDecorator(withKnobs)
//   .add("Showcase", Showcase);

// storiesOf(`${storyName}/Examples`, module)
//   .add("ProgressBar in Modal", () => <ProgressBarModal />)
//   .add("Loading ProgressBar", () => <Loading />);

// storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", () => <Screener />);
