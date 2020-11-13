import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ButtonTriggerExample from "./examples/ButtonTrigger";
import TooltipExample from "./examples/Tooltip";
import ShouldKeepFocusExample from "./examples/ShouldKeepFocus";
import StateValueExample from "./examples/StateValue";
import PositioningElementExample from "./examples/PositioningElement";
import Popover from "../src";

const storyName = getStoryName("Popover");

export default {
  title: `${storyName}/Examples`,
  component: Popover,
};

export const ButtonTriggerStory = () => (
  <ExampleStory component="Popover" storyName="Button Trigger" fileName="examples/ButtonTrigger.js">
    <ButtonTriggerExample />
  </ExampleStory>
);
ButtonTriggerStory.story = {
  name: "Button Trigger",
  parameters: exampleStoryParameters,
};

export const TooltipStory = () => (
  <ExampleStory component="Popover" storyName="Tooltip" fileName="examples/Tooltip.js">
    <TooltipExample />
  </ExampleStory>
);
TooltipStory.story = {
  name: "Tooltip",
  parameters: exampleStoryParameters,
};

export const ShouldKeepFocusStory = () => (
  <ExampleStory component="Popover" storyName="Input Trigger Keeps Focus" fileName="examples/ShouldKeepFocus.js">
    <ShouldKeepFocusExample />
  </ExampleStory>
);
ShouldKeepFocusStory.story = {
  name: "Input Trigger Keeps Focus",
  parameters: exampleStoryParameters,
};

export const StateValueStory = () => (
  <ExampleStory component="Popover" storyName="Uncontrolled State Value" fileName="examples/StateValue.js">
    <StateValueExample />
  </ExampleStory>
);
StateValueStory.story = {
  name: "State Value",
  parameters: exampleStoryParameters,
};

export const PositioningElementStory = () => (
  <ExampleStory component="Popover" storyName="Positioning Element" fileName="examples/PositioningElement.js">
    <PositioningElementExample />
  </ExampleStory>
);
PositioningElementStory.story = {
  name: "Positioning Element",
  parameters: exampleStoryParameters,
};
