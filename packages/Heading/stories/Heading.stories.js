import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ShowcaseStory from "./examples/Showcase";
import HeadingLevelsStory from "./examples/HeadingLevels";
import HeadingStylesStory from "./examples/HeadingStyles";
import HeadingLayoutsStory from "./examples/HeadingLayouts";
import HeadingFocusStory from "./examples/HeadingFocus";
import ScreenerStory from "./examples/test/Screener";
import A11yStory from "./examples/test/A11y";

const storyName = getStoryName("Heading");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module)
  .add("Heading Levels", () => <HeadingLevelsStory />)
  .add("Heading Styles", () => <HeadingStylesStory />)
  .add("Heading Layouts", () => <HeadingLayoutsStory />)
  .add("Heading Focus", () => <HeadingFocusStory />);

storiesOf(`${storyName}/Backyard/Tests`, module)
  .add("Screener", () => <ScreenerStory />)
  .add("Accessibility", () => <A11yStory />);
