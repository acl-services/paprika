import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import FakeAppWithoutContext from "./examples/FakeAppWithoutContext";
import FakeAppWithLocales from "./examples/FakeAppWithLocales";
import FakeAppWithInterpolation from "./examples/FakeAppWithInterpolation";

import L10n from "../src";

const storyName = getStoryName("L10n");

export default {
  title: `${storyName}/Examples`,
  component: L10n,
};

//

export const FakeAppWithLocalesStory = () => (
  <ExampleStory component="L10n" storyName="App with Locales" fileName="examples/withLocales/FakeAppWithLocales.js">
    <FakeAppWithLocales locale="fr" />
  </ExampleStory>
);

FakeAppWithLocalesStory.story = {
  name: "App with Locales",
  parameters: exampleStoryParameters,
};

//

export const FakeAppWithoutContextStory = () => (
  <ExampleStory component="L10n" storyName="App without Context" fileName="examples/FakeAppWithoutContext.js">
    <FakeAppWithoutContext />
  </ExampleStory>
);

FakeAppWithoutContextStory.story = {
  name: "App without Context",
  parameters: exampleStoryParameters,
};

//

export const FakeAppWithInterpolationStory = () => (
  <ExampleStory component="L10n" storyName="App with Interpolation" fileName="examples/FakeAppWithInterpolation.js">
    <FakeAppWithInterpolation />
  </ExampleStory>
);

FakeAppWithInterpolationStory.story = {
  name: "App with Interpolation",
  parameters: exampleStoryParameters,
};
