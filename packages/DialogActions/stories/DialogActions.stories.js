import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";
import Variations from "./examples/Variations";
import Screener from "./examples/Screener";

storiesOf("DialogActions", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("Variations", () => <Variations />);

storiesOf("DialogActions/Automation Tests", module).add("Screener", () => <Screener />);
