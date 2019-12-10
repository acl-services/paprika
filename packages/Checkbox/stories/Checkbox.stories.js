import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import CheckboxAlign from "./examples/CheckboxAlign";
import CheckboxGrouping from "./examples/CheckboxGrouping";
import ShowcaseStory from "./examples/Showcase";

storiesOf("Checkbox", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)

  .add("Checkbox group", () => (
    <Story>
      <CheckboxGrouping />
    </Story>
  ))
  .add("Checkbox Align", () => (
    <Story>
      <CheckboxAlign />
    </Story>
  ));

storiesOf("Checkbox/Automation Tests", module).add("Cypress", () => <ShowcaseStory />);
