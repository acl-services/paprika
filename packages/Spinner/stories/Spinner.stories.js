import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Basic from "./examples/Basic";
import A11yStory from "./examples/test/A11y";
import ScreenerStory from "./examples/test/Screener";

storiesOf("Spinner", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <Basic />);

storiesOf("Spinner/Automation Tests/Screener", module).add("Basic", () => {
  return <ScreenerStory />;
});

storiesOf("Spinner/Automation Tests/Accessibility", module).add("Default", () => {
  return <A11yStory />;
});
