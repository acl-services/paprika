import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import ShowcaseStory from "./examples/Showcase";
import ConfirmationExample from "./examples/ConfirmationExample";

storiesOf("Confirmation", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("Confirmation", () => <ConfirmationExample />)
  .add("ConfirmationExample with locale", () => (
    <L10n locale="zh">
      <ConfirmationExample />
    </L10n>
  ));
