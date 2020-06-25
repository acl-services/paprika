import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ShowcaseStory from "./examples/Showcase";
import Responses from "./examples/Responses";
import Screener from "./examples/Screener";

const storyName = getStoryName("ProgressAccordion");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module).add("ProgressAccordion.Responses", () => <Responses />);

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", () => <Screener />);
