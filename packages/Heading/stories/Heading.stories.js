import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import A11yStory from "./examples/A11yStory";
import HeadingLevelsStory from "./examples/HeadingLevels";
import HeadingStylesStory from "./examples/HeadingStyles";
import ScreenerStory from "./examples/test/Screener";
import ShowcaseStory from "./examples/Showcase";

storiesOf("Heading", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => {
    return <ShowcaseStory />;
  })
  .add("Heading Levels", () => {
    return <HeadingLevelsStory />;
  })
  .add("Heading Styles", () => {
    return <HeadingStylesStory />;
  });

storiesOf("Heading/Automation Tests/Screener", module).add("Basic", () => {
  return <ScreenerStory />;
});

storiesOf("Heading/Automation Tests/Accessibility", module).add("Default", () => {
  return <A11yStory />;
});
