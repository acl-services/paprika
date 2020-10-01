import React from "react";
import { getStoryName } from "storybook/storyTree";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import ButtonSubmit from "./examples/ButtonSubmit";
import CloseButtonRef from "./examples/CloseButtonRef";
import Focus from "./examples/Focus";
import NewRef from "./examples/NewRef";
import OldRef from "./examples/OldRef";
import Button from "../src";

const storyName = getStoryName("Button");

export default {
  title: `${storyName}/Examples`,
  component: Button,
};

export const buttonSubmit = () => (
  <ExampleStory storyName="Submit" fileName="examples/ButtonSubmit.js">
    <ButtonSubmit />
  </ExampleStory>
);
buttonSubmit.story = { name: "Submit", parameters: exampleStoryParameters };

export const closeButtonRef = () => (
  <ExampleStory storyName="Close Ref" fileName="examples/CloseButtonRef.js">
    <CloseButtonRef />
  </ExampleStory>
);
closeButtonRef.story = { name: "Close Ref", parameters: exampleStoryParameters };

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
