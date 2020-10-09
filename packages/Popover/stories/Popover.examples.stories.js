import React from "react";
import { getStoryName } from "storybook/storyTree";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import ButtonExample from "./examples/ButtonExample";
import InputExample from "./examples/InputExample";
import IconExample from "./examples/IconExample";
import LinkIsEagerExample from "./examples/LinkIsEagerExample";
import ButtonIsEagerExample from "./examples/ButtonIsEagerExample";
import LinkExample from "./examples/LinkExample";
import IsDarkExample from "./examples/IsDarkExample";
import NoCardExample from "./examples/NoCardExample";
import ShouldKeepFocusExample from "./examples/ShouldKeepFocusExample";
import ButtonStateExample from "./examples/ButtonStateExample";
import Transformed from "./examples/Transformed";
import DynamicContent from "./examples/DynamicContent";
import Popover from "../src/Popover";

const storyName = getStoryName("Popover");

export default {
  title: `${storyName}/Examples`,
  component: Popover,
};

export const buttonExample = () => (
  <ExampleStory storyName="Button" fileName="examples/ButtonExample.js">
    <ButtonExample />
  </ExampleStory>
);
buttonExample.story = { name: "Button", parameters: exampleStoryParameters };

export const buttonIsEagerExample = () => (
  <ExampleStory storyName="Button isEager" fileName="examples/ButtonIsEagerExample.js">
    <ButtonIsEagerExample />
  </ExampleStory>
);
buttonIsEagerExample.story = { name: "Button isEager", parameters: exampleStoryParameters };

export const buttonStateExample = () => (
  <ExampleStory storyName="Button State" fileName="examples/ButtonStateExample.js">
    <ButtonStateExample />
  </ExampleStory>
);
buttonStateExample.story = { name: "Button State", parameters: exampleStoryParameters };

export const inputExample = () => (
  <ExampleStory storyName="Input" fileName="examples/InputExample.js">
    <InputExample />
  </ExampleStory>
);
inputExample.story = { name: "Input", parameters: exampleStoryParameters };

export const iconExample = () => (
  <ExampleStory storyName="Icon" fileName="examples/IconExample.js">
    <IconExample />
  </ExampleStory>
);
iconExample.story = { name: "Icon", parameters: exampleStoryParameters };

export const linkExample = () => (
  <ExampleStory storyName="Link" fileName="examples/ButtonIsEagerExample.js">
    <LinkExample />
  </ExampleStory>
);
linkExample.story = { name: "Link", parameters: exampleStoryParameters };

export const linkIsEagerExample = () => (
  <ExampleStory storyName="Link isEager" fileName="examples/LinkIsEagerExample.js">
    <LinkIsEagerExample />
  </ExampleStory>
);
linkIsEagerExample.story = { name: "Link isEager", parameters: exampleStoryParameters };

export const isDarkExample = () => (
  <ExampleStory storyName="isDark" fileName="examples/IsDarkExample.js">
    <IsDarkExample />
  </ExampleStory>
);
isDarkExample.story = { name: "isDark", parameters: exampleStoryParameters };

export const noCardExample = () => (
  <ExampleStory storyName="No Card" fileName="examples/NoCardExample.js">
    <NoCardExample />
  </ExampleStory>
);
noCardExample.story = { name: "No Card", parameters: exampleStoryParameters };

export const shouldKeepFocusExample = () => (
  <ExampleStory storyName="shouldKeepFocus" fileName="examples/ShouldKeepFocusExample.js">
    <ShouldKeepFocusExample />
  </ExampleStory>
);
shouldKeepFocusExample.story = { name: "shouldKeepFocus", parameters: exampleStoryParameters };

export const transformed = () => (
  <ExampleStory storyName="Transformed" fileName="examples/Transformed.js">
    <Transformed />
  </ExampleStory>
);
transformed.story = { name: "Transformed", parameters: exampleStoryParameters };

export const dynamicContent = () => (
  <ExampleStory storyName="Dynamic" fileName="examples/DynamicContent.js">
    <DynamicContent />
  </ExampleStory>
);
dynamicContent.story = { name: "Dynamic", parameters: exampleStoryParameters };
