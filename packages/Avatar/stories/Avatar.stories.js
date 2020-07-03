import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import SizesColorsExample from "./examples/SizesColors";

const storyName = getStoryName("Avatar");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf(`${storyName}/Examples`, module).add("Sizes and Colors", () => <SizesColorsExample />);

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", () => <SizesColorsExample />);
