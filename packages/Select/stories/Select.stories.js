import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import A11yStory from "./examples/test/A11y";
import ScreenerStory from "./examples/test/Screener";
import ShowcaseStory from "./examples/Showcase";
import * as Select from "./examples/Basic";

storiesOf("Select", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("With Selected Option", () => <Select.WithSelectedOption />)
  .add("With isDisabled", () => <Select.DisableSelect />)
  .add("With isReadOnly", () => <Select.ReadOnlySelect />)
  .add("With hasError", () => <Select.HasErrorSelect />);

storiesOf("Select/Automation Tests/Screener", module).add("Basic", () => {
  return <ScreenerStory />;
});

storiesOf("Select/Automation Tests/Accessibility", module).add("Default", () => {
  return <A11yStory />;
});
