import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import ScreenerStory from "./examples/test/Screener";
import A11yStory from "./examples/test/A11y";

const storyName = getStoryName("Spinner");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf(`${storyName}/Backyard/Tests`, module)
  .add("Screener", () => <ScreenerStory />)
  .add("Accessibility", () => <A11yStory />);
