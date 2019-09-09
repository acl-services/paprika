import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Variations from "./examples/Variations";

storiesOf("Collapsible", module)
  .addDecorator(withKnobs)
  .add("Variations", () => <Variations />);
