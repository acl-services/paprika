import React from "react";
import { getStoryName } from "storybook/storyTree";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import ButtonStates from "./examples/ButtonStates";
import ButtonSubmit from "./examples/ButtonSubmit";
import ButtonVariations from "./examples/ButtonVariations";
import CloseButtonRef from "./examples/CloseButtonRef";
import CommonButtons from "./examples/CommonButtons";
import Focus from "./examples/Focus";
import NewRef from "./examples/NewRef";
import OldRef from "./examples/OldRef";
import Button from "../src";

const storyName = getStoryName("Button");

export default {
  title: `${storyName}/Examples`,
  component: Button,
};

export const buttonStates = () => (
  <ExampleStory storyName="Button States" fileName="examples/ButtonStates.js">
    <ButtonStates />
  </ExampleStory>
);
buttonStates.story = { name: "Button States", parameters: exampleStoryParameters };

export const buttonSubmit = () => (
  <ExampleStory storyName="Button Submit" fileName="examples/ButtonSubmit.js">
    <ButtonSubmit />
  </ExampleStory>
);
buttonSubmit.story = { name: "Button Submit", parameters: exampleStoryParameters };

export const buttonVariations = () => (
  <ExampleStory storyName="Button Variations" fileName="examples/ButtonVariations.js">
    <ButtonVariations />
  </ExampleStory>
);
buttonVariations.story = { name: "Button Variations", parameters: exampleStoryParameters };

export const closeButtonRef = () => (
  <ExampleStory storyName="Close Button Ref" fileName="examples/CloseButtonRef.js">
    <CloseButtonRef />
  </ExampleStory>
);
closeButtonRef.story = { name: "Close Button Ref", parameters: exampleStoryParameters };

export const commonButtons = () => (
  <ExampleStory storyName="Common Buttons" fileName="examples/CommonButtons.js">
    <CommonButtons />
  </ExampleStory>
);
commonButtons.story = { name: "Common Buttons", parameters: exampleStoryParameters };

export const focus = () => (
  <ExampleStory storyName="Focus" fileName="examples/Focus.js">
    <Focus />
  </ExampleStory>
);
focus.story = { name: "Focus", parameters: exampleStoryParameters };

export const newRef = () => (
  <ExampleStory storyName="New Ref" fileName="examples/NewRef.js">
    <NewRef />
  </ExampleStory>
);
newRef.story = { name: "New Ref", parameters: exampleStoryParameters };

export const oldRef = () => (
  <ExampleStory storyName="oldRef" fileName="examples/OldRef.js">
    <OldRef />
  </ExampleStory>
);
oldRef.story = { name: "Old Ref", parameters: exampleStoryParameters };
