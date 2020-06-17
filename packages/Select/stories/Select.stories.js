import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import A11yStory from "./examples/test/A11y";
import ScreenerStory from "./examples/test/Screener";
import ShowcaseStory from "./examples/Showcase";
import * as Select from "./examples/Basic";

const storyName = getStoryName("Select");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module)
  .add("With Selected Option", () => <Select.WithSelectedOption />)
  .add("With isDisabled", () => <Select.DisableSelect />)
  .add("With isReadOnly", () => <Select.ReadOnlySelect />)
  .add("With hasError", () => <Select.HasErrorSelect />);

storiesOf(`${storyName}/Backyard/Tests`, module)
  .add("Screener", () => <ScreenerStory />)
  .add("Accessibility", () => <A11yStory />);
