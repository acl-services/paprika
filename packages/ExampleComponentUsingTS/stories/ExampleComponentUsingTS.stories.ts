// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from "@storybook/addon-knobs";
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";

const storyName = getStoryName("ExampleComponentUsingTS");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);
