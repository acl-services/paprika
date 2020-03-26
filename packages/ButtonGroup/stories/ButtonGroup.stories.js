import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Showcase from "./examples/Showcase";

storiesOf("ButtonGroup", module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);
