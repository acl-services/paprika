import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import L10n from "@paprika/l10n";
import ConfirmationExample from "./examples/ConfirmationExample";
import ConfirmationExampleWithTrigger from "./examples/ConfirmationExampleWithTrigger";
import ConfirmationExampleWithTriggerIcon from "./examples/ConfirmationExampleWithTriggerIcon";
import ConfirmationExampleWithTriggerRaw from "./examples/ConfirmationExampleWithTriggerRaw";
import ConfirmationExampleWithAsyncAction from "./examples/ConfirmationExampleWithAsyncAction";

import Confirmation from "../src";

const storyName = getStoryName("Confirmation");

const confirmationStoryParameters = {
  parameters: {
    viewMode: "story",
    options: {
      isToolshown: false,
      docs: { disable: true },
    },
  },
};

export default {
  title: `${storyName}/Examples`,
  component: Confirmation,
};

export const basic = () => (
  <ExampleStory component="Confirmation" storyName="Basic" fileName="examples/ConfirmationExample.js">
    <ConfirmationExample />
  </ExampleStory>
);

basic.story = confirmationStoryParameters;

export const locale = () => (
  <ExampleStory
    component="Confirmation"
    storyName="ConfirmationExample with locale"
    fileName="examples/ConfirmationExample.js"
  >
    <L10n locale="zh">
      <ConfirmationExample />
    </L10n>
  </ExampleStory>
);

locale.story = confirmationStoryParameters;

export const trigger = () => (
  <>
    <ExampleStory
      component="Confirmation"
      storyName="ConfirmationExample with trigger"
      fileName="examples/ConfirmationExampleWithTrigger.js"
    >
      <ConfirmationExampleWithTrigger />
    </ExampleStory>
    <br />
    <ExampleStory
      component="Confirmation"
      storyName="Trigger example with icon button"
      fileName="examples/ConfirmationExampleWithTriggerIcon.js"
    >
      <ConfirmationExampleWithTriggerIcon />
    </ExampleStory>
    <br />
    <ExampleStory
      component="Confirmation"
      storyName="Trigger example with raw button"
      fileName="examples/ConfirmationExampleWithTriggerRaw.js"
    >
      <ConfirmationExampleWithTriggerRaw />
    </ExampleStory>
  </>
);

trigger.story = confirmationStoryParameters;

export const async = () => (
  <ExampleStory
    component="Confirmation"
    storyName="ConfirmationExample with async action"
    fileName="examples/ConfirmationExampleWithAsyncAction.js"
  >
    <ConfirmationExampleWithAsyncAction />
  </ExampleStory>
);

async.story = confirmationStoryParameters;
