import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import { ButtonStory } from "./Button.stories.styles";
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
  <ButtonStory storyName="Submit" component="Button" fileName="examples/ButtonSubmit.js">
    <ButtonSubmit />
  </ButtonStory>
);
buttonSubmit.story = {
  name: "Submit Button",
  parameters: exampleStoryParameters,
};

export const focus = () => (
  <ButtonStory storyName="Focus" component="Button" fileName="examples/Focus.js">
    <Focus />
  </ButtonStory>
);
focus.story = {
  name: "Focus Test",
  parameters: exampleStoryParameters,
};

export const newRef = () => (
  <ButtonStory storyName="New Ref" component="Button" fileName="examples/NewRef.js">
    <NewRef />
  </ButtonStory>
);
newRef.story = {
  name: "New Ref",
  parameters: exampleStoryParameters,
};

export const oldRef = () => (
  <ButtonStory storyName="oldRef" component="Button" fileName="examples/OldRef.js">
    <OldRef />
  </ButtonStory>
);
oldRef.story = {
  name: "Old Ref",
  parameters: exampleStoryParameters,
};

export const closeButtonRef = () => (
  <ButtonStory storyName="Close Ref" component="Button" fileName="examples/CloseButtonRef.js">
    <CloseButtonRef />
  </ButtonStory>
);
closeButtonRef.story = {
  name: "Close Button",
  parameters: exampleStoryParameters,
};
