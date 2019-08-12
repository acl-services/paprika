import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";
import Responses from "./examples/Responses";
import Screener from "./examples/Screener";

storiesOf("ProgressAccordion", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("ProgressAccordion.Responses", () => <Responses />);

storiesOf("ProgressAccordion/Automation Tests", module).add("Screener", () => <Screener />);
