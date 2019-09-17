import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Variations from "./examples/Variations";
import Screener from "./examples/Screener";

storiesOf("CollapsibleText", module)
  .addDecorator(withKnobs)
  .add("Variations", () => <Variations />);

storiesOf("CollapsibleText/Automation Tests", module).add("Screener", () => <Screener />);
