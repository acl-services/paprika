import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Sandbox from "./examples/Sandbox";
import Screener from "./examples/Screener";

const storyName = getStoryName("ButtonGroup");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Sandbox", Sandbox);

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", Screener);
