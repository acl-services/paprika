import React from "react";
import { storiesOf } from "@storybook/react";
import { Story } from "storybook/assets/styles/common.styles";
import { withKnobs } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import ShowcaseStory from "./examples/Showcase";
import ConfirmationExample from "./examples/ConfirmationExample";
import ConfirmationExampleWithTrigger from "./examples/ConfirmationExampleWithTrigger";
import ConfirmationExampleWithTriggerIcon from "./examples/ConfirmationExampleWithTriggerIcon";
import ConfirmationExampleWithAsyncAction from "./examples/ConfirmationExampleWithAsyncAction";

storiesOf("Confirmation", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("Confirmation", () => (
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
      <ConfirmationExampleWithTrigger />
      <br />
      <ConfirmationExampleWithTriggerIcon />
    </Story>
  ))
  .add("ConfirmationExample with async action", () => (
    <Story>
      <ConfirmationExampleWithAsyncAction />
    </Story>
  ));
