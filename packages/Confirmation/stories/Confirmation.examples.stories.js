import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import L10n from "@paprika/l10n";
import ConfirmationExample from "./examples/ConfirmationExample";
import ConfirmationExampleWithTrigger from "./examples/ConfirmationExampleWithTrigger";
import ConfirmationExampleWithTriggerIcon from "./examples/ConfirmationExampleWithTriggerIcon";
import ConfirmationExampleWithTriggerRaw from "./examples/ConfirmationExampleWithTriggerRaw";
import ConfirmationExampleWithAsyncAction from "./examples/ConfirmationExampleWithAsyncAction";

const storyName = getStoryName("Confirmation");

export default {
  title: `${storyName}/Examples`,
};

export const basic = () => (
  <ExampleStory component="Confirmation" storyName="Basic Confirmation" fileName="examples/ConfirmationExample.js">
    <ConfirmationExample />
  </ExampleStory>
);
basic.story = { parameters: exampleStoryParameters };

export const locale = () => (
  <ExampleStory
    component="Confirmation"
    storyName="Confirmation with Chinese locale"
    fileName="examples/ConfirmationExample.js"
  >
    <L10n locale="zh">
      <ConfirmationExample />
    </L10n>
  </ExampleStory>
);
locale.story = { parameters: exampleStoryParameters };

export const trigger = () => (
  <ExampleStory
    component="Confirmation"
    storyName="Confirmation with trigger"
    fileName="examples/ConfirmationExampleWithTrigger.js"
  >
    <ConfirmationExampleWithTrigger />
  </ExampleStory>
);
trigger.story = { parameters: exampleStoryParameters };

export const triggerIcon = () => (
  <ExampleStory
    component="Confirmation"
    storyName="Trigger example with Button.Icon"
    fileName="examples/ConfirmationExampleWithTriggerIcon.js"
  >
    <ConfirmationExampleWithTriggerIcon />
  </ExampleStory>
);
triggerIcon.story = {
  name: "Icon Trigger",
  parameters: exampleStoryParameters,
};

export const triggerButton = () => (
  <ExampleStory
    component="Confirmation"
    storyName="Trigger example with RawButton"
    fileName="examples/ConfirmationExampleWithTriggerRaw.js"
  >
    <ConfirmationExampleWithTriggerRaw />
  </ExampleStory>
);
triggerButton.story = {
  name: "RawButton Trigger",
  parameters: exampleStoryParameters,
};

export const async = () => (
  <ExampleStory
    component="Confirmation"
    storyName="Confirmation with async action"
    fileName="examples/ConfirmationExampleWithAsyncAction.js"
  >
    <ConfirmationExampleWithAsyncAction />
  </ExampleStory>
);
async.story = { parameters: exampleStoryParameters };
