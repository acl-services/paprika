import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
// @ts-ignore
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";

const storyName = getStoryName("ExampleComponentUsingTS");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);
