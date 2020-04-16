import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Sandbox from "./examples/Sandbox";

storiesOf("ButtonGroup", module)
  .addDecorator(withKnobs)
  .add("Sandbox", Sandbox);
