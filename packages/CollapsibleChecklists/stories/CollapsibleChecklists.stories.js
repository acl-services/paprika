import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import AdvancedExample from "./examples/Advanced";
import BasicExample from "./examples/Basic";

const storyName = getStoryName("CollapsibleChecklists");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Basic", () => <BasicExample />)
  .add("Advanced", () => <AdvancedExample />);
