import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ShowcaseStory from "./examples/Showcase";
import Responses from "./examples/Responses";
import Screener from "./examples/Screener";
import Nav from "./examples/Nav";

const storyName = getStoryName("ProgressAccordion");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module)
  .add("Responses", () => <Responses />)
  .add("As a nav", () => <Nav />);

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", () => <Screener />);
