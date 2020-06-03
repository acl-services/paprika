import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ShowcaseStory from "./examples/Showcase";
import Uncontrolled from "./examples/Uncontrolled";
import Sizes from "./examples/Sizes";
import A11yStory from "./examples/test/A11y";
import ScreenerStory from "./examples/test/Screener";

const storyName = getStoryName("Textarea");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module)
  .add("Uncontrolled", Uncontrolled)
  .add("Sizes", () => <Sizes />);

storiesOf(`${storyName}/Backyard/Tests`, module)
  .add("Screener", () => <ScreenerStory />)
  .add("Accessibility", () => <A11yStory />);
