import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import BasicStory from "./examples/Basic";
import WithFormStory from "./examples/WithForm";

const storyName = getStoryName("Guard");

storiesOf(storyName, module)
  .add("Basic", () => <BasicStory />)
  .add("With form", () => <WithFormStory />);
