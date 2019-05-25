import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Showcase from "./examples/Showcase";
import ScreenerStory from "./examples/test/Screener";
import A11yStory from "./examples/test/A11y";

storiesOf("Spinner", module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf("Spinner/Automation Tests", module)
  .add("Screener", () => <ScreenerStory />)
  .add("Accessibility", () => <A11yStory />);
