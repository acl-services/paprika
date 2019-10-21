import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import { Story } from "storybook/assets/styles/common.styles";
import CheckboxAlign from "./examples/CheckboxAlign";
import CheckboxGrouping from "./examples/CheckboxGrouping";
import ShowcaseStory from "./examples/Showcase";

storiesOf("Checkbox", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)

  .add("Checkbox group", () => (
    <L10n locale="zh">
      <Story>
        <CheckboxGrouping />
      </Story>
    </L10n>
  ))
  .add("Checkbox Align", () => (
    <L10n locale="zh">
      <Story>
        <CheckboxAlign />
      </Story>
    </L10n>
  ));
