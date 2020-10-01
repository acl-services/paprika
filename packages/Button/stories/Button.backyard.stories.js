import React from "react";
import { getStoryName } from "storybook/storyTree";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import ButtonStates from "./backyard/ButtonStates";
import ButtonVariations from "./backyard/ButtonKinds";
import CommonButtons from "./backyard/ButtonSizes";
import Button from "../src";

const storyName = getStoryName("Button");

export default {
  title: `${storyName}/Backyard`,
  component: Button,
};

export const buttonStates = () => (
  <ExampleStory storyName="States" fileName="backyard/ButtonStates.js">
    <ButtonStates />
  </ExampleStory>
);
buttonStates.story = { name: "States", parameters: exampleStoryParameters };

export const buttonVariations = () => (
  <ExampleStory storyName="Kinds" fileName="backyard/ButtonKinds.js">
    <ButtonVariations />
  </ExampleStory>
);
buttonVariations.story = { name: "Kinds", parameters: exampleStoryParameters };

export const commonButtons = () => (
  <ExampleStory storyName="Sizes" fileName="backyard/ButtonSizes.js">
    <CommonButtons />
  </ExampleStory>
);
commonButtons.story = { name: "Sizes", parameters: exampleStoryParameters };
