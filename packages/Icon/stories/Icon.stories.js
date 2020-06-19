import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import InlineTest from "./examples/InlineTest";
import AllIconsStory from "./examples/AllIcons";

const storyName = getStoryName("Icon");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("All Icons", AllIconsStory);

storiesOf(`${storyName}/Backyard/Sandbox`, module).add("Inline Test", () => <InlineTest />);
