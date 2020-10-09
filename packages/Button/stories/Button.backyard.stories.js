import React from "react";
import { getStoryName } from "storybook/storyTree";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import ButtonStates from "./backyard/starling/ButtonStates";
import ButtonVariations from "./backyard/starling/ButtonKinds";
import CommonButtons from "./backyard/starling/ButtonSizes";
import Button from "../src";

const storyName = getStoryName("Button");

export default {
  title: `${storyName}/Backyard/Starling`,
  component: Button,
};

export const buttonStates = () => (
  <ExampleStory storyName="States" fileName="backyard/starling/ButtonStates.js">
    <ButtonStates />
  </ExampleStory>
);
buttonStates.story = { name: "States", parameters: exampleStoryParameters };

export const buttonVariations = () => (
  <ExampleStory storyName="Kinds" fileName="backyard/starling/ButtonKinds.js">
    <ButtonVariations />
  </ExampleStory>
);
buttonVariations.story = { name: "Kinds", parameters: exampleStoryParameters };

export const commonButtons = () => (
  <ExampleStory storyName="Sizes" fileName="backyard/starling/ButtonSizes.js">
    <CommonButtons />
  </ExampleStory>
);
commonButtons.story = { name: "Sizes", parameters: exampleStoryParameters };
