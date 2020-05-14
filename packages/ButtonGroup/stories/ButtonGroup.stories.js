import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Sandbox from "./examples/Sandbox";
import Screener from "./examples/Screener";

storiesOf("ButtonGroup", module)
  .addDecorator(withKnobs)
  .add("Sandbox", Sandbox);

storiesOf("ButtonGroup/Backyard/Tests", module).add("Screener", Screener);
