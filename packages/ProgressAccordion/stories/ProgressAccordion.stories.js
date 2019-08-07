import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";
import Screener from "./examples/Screener";

storiesOf("ProgressAccordion", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf("ProgressAccordion/Automation Tests", module).add("Screener", () => <Screener />);
