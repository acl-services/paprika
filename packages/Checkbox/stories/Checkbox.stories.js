import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import CheckboxAlign from "./examples/CheckboxAlign";
import CheckboxGrouping from "./examples/CheckboxGrouping";
import ShowcaseStory from "./examples/Showcase";

const storyName = getStoryName("Checkbox");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module)
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
