import React from "react";
import { getStoryName } from "storybook/storyTree";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import ButtonExample from "./examples/Button";
import InputExample from "./examples/Input";
import IconExample from "./examples/Icon";
import LinkIsEagerExample from "./examples/LinkIsEager";
import ButtonIsEagerExample from "./examples/ButtonIsEager";
import LinkExample from "./examples/Link";
import IsDarkExample from "./examples/IsDark";
import NoCardExample from "./examples/NoCard";
import ShouldKeepFocusExample from "./examples/ShouldKeepFocus";
import ButtonStateExample from "./examples/ButtonState";
import DefaultIsOpen from "./examples/DefaultIsOpen";
import Popover from "../src/Popover";

const storyName = getStoryName("Popover");

export default {
  title: `${storyName}/Examples`,
  component: Popover,
};

export const buttonExample = () => (
  <ExampleStory storyName="Button" fileName="examples/Button.js">
    <ButtonExample />
  </ExampleStory>
);
buttonExample.story = { name: "Button", parameters: exampleStoryParameters };

export const buttonIsEagerExample = () => (
  <ExampleStory storyName="Button isEager" fileName="examples/ButtonIsEager.js">
    <ButtonIsEagerExample />
  </ExampleStory>
);
buttonIsEagerExample.story = { name: "Button isEager", parameters: exampleStoryParameters };

export const buttonStateExample = () => (
  <ExampleStory storyName="Button State" fileName="examples/ButtonState.js">
    <ButtonStateExample />
  </ExampleStory>
);
buttonStateExample.story = { name: "Button State", parameters: exampleStoryParameters };

export const inputExample = () => (
  <ExampleStory storyName="Input" fileName="examples/Input.js">
    <InputExample />
  </ExampleStory>
);
inputExample.story = { name: "Input", parameters: exampleStoryParameters };

export const iconExample = () => (
  <ExampleStory storyName="Icon" fileName="examples/Icon.js">
    <IconExample />
  </ExampleStory>
);
iconExample.story = { name: "Icon", parameters: exampleStoryParameters };

export const linkExample = () => (
  <ExampleStory storyName="Link" fileName="examples/ButtonIsEager.js">
    <LinkExample />
  </ExampleStory>
);
linkExample.story = { name: "Link", parameters: exampleStoryParameters };

export const linkIsEagerExample = () => (
  <ExampleStory storyName="Link isEager" fileName="examples/LinkIsEager.js">
    <LinkIsEagerExample />
  </ExampleStory>
);
linkIsEagerExample.story = { name: "Link isEager", parameters: exampleStoryParameters };

export const isDarkExample = () => (
  <ExampleStory storyName="isDark" fileName="examples/IsDark.js">
    <IsDarkExample />
  </ExampleStory>
);
isDarkExample.story = { name: "isDark", parameters: exampleStoryParameters };

export const noCardExample = () => (
  <ExampleStory storyName="No Card" fileName="examples/NoCard.js">
    <NoCardExample />
  </ExampleStory>
);
noCardExample.story = { name: "No Card", parameters: exampleStoryParameters };

export const shouldKeepFocusExample = () => (
  <ExampleStory storyName="shouldKeepFocus" fileName="examples/ShouldKeepFocus.js">
    <ShouldKeepFocusExample />
  </ExampleStory>
);
shouldKeepFocusExample.story = { name: "shouldKeepFocus", parameters: exampleStoryParameters };

export const defaultIsOpen = () => (
  <ExampleStory storyName="defaultIsOpen" fileName="examples/DefaultIsOpen.js">
    <DefaultIsOpen />
  </ExampleStory>
);
defaultIsOpen.story = { name: "defaultIsOpen", parameters: exampleStoryParameters };
