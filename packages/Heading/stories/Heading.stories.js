import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ShowcaseStory from "./examples/Showcase";
import HeadingLevelsStory from "./examples/HeadingLevels";
import HeadingStylesStory from "./examples/HeadingStyles";
import ScreenerStory from "./examples/test/Screener";
import A11yStory from "./examples/test/A11y";

storiesOf("Heading", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("Heading Levels", () => <HeadingLevelsStory />)
  .add("Heading Styles", () => <HeadingStylesStory />);

storiesOf("Heading/Automation Tests/Screener", module).add("Basic", () => <ScreenerStory />);

storiesOf("Heading/Automation Tests/Accessibility", module).add("Default", () => <A11yStory />);
