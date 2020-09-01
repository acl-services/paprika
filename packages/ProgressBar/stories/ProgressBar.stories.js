import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";

import Showcase from "./examples/Showcase";
import ProgressBarModal from "./examples/ProgressBarModal";
import Screener from "./examples/Screener";

const storyName = getStoryName("ProgressBar");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf(`${storyName}/Examples`, module).add("ProgressBar in Modal", () => <ProgressBarModal />);

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", () => <Screener />);
