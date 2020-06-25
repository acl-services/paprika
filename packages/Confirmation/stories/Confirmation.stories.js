import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import L10n from "@paprika/l10n";
import Heading from "@paprika/heading";
import ShowcaseStory from "./examples/Showcase";
import ConfirmationExample from "./examples/ConfirmationExample";
import ConfirmationExampleWithTrigger from "./examples/ConfirmationExampleWithTrigger";
import ConfirmationExampleWithTriggerIcon from "./examples/ConfirmationExampleWithTriggerIcon";
import ConfirmationExampleWithTriggerRaw from "./examples/ConfirmationExampleWithTriggerRaw";
import ConfirmationExampleWithAsyncAction from "./examples/ConfirmationExampleWithAsyncAction";

const storyName = getStoryName("Confirmation");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module)
  .add("Basic", () => (
    <Story>
      <ConfirmationExample />
    </Story>
  ))
  .add("ConfirmationExample with locale", () => (
    <L10n locale="zh">
      <Story>
        <ConfirmationExample />
      </Story>
    </L10n>
  ))
  .add("ConfirmationExample with trigger", () => (
    <Story>
      <Heading level={1} displayLevel={4} isLight>
        Trigger example with default simple button
      </Heading>
      <ConfirmationExampleWithTrigger />
      <Rule />
      <br />
      <Heading level={1} displayLevel={4} isLight>
        Trigger example with icon button
      </Heading>
      <ConfirmationExampleWithTriggerIcon />
      <Rule />
      <br />
      <Heading level={1} displayLevel={4} isLight>
        Trigger example with raw button
      </Heading>
      <ConfirmationExampleWithTriggerRaw />
      <Rule />
    </Story>
  ))
  .add("ConfirmationExample with async action", () => (
    <Story>
      <ConfirmationExampleWithAsyncAction />
    </Story>
  ));

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", () => <ConfirmationExample />);
