import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";
import Responses from "./examples/Responses";
import Screener from "./examples/Screener";

storiesOf("Progress Accordion", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("Progress Accordion.Responses", () => <Responses />);

storiesOf("Progress Accordion/Automation Tests", module).add("Screener", () => <Screener />);
