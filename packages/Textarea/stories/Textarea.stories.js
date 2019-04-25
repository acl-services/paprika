import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";
import Sizes from "./examples/Sizes";
import A11yStory from "./examples/test/A11y";
import ScreenerStory from "./examples/test/Screener";

storiesOf("Textarea", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <ShowcaseStory />)
  .add("Sizes", () => <Sizes />);

storiesOf("Textarea/Automation Tests/Screener", module).add("Basic", () => {
  return <ScreenerStory />;
});

storiesOf("Textarea/Automation Tests/Accessibility", module).add("Default", () => {
  return <A11yStory />;
});
