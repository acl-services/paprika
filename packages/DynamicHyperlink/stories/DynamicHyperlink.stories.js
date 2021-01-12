import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import Screener from "./tests/Screener";

const storyName = getStoryName("DynamicHyperlink");

storiesOf(storyName, module)
  .add("Showcase", Showcase)
  .add("Screener", Screener);
