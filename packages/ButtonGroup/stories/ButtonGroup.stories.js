import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Sandbox from "./examples/Sandbox";
import Variations from "./examples/Variations";

const storyName = getStoryName("ButtonGroup");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Sandbox", Sandbox);

storiesOf(storyName, module).add("Variations", Variations);

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", Variations);
