import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import SizesColorsExample from "./examples/SizesColors";
import AvatarIcon from "./examples/AvatarIcon";

const storyName = getStoryName("Avatar");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf(`${storyName}/Examples`, module)
  .add("Sizes and Colors", () => <SizesColorsExample />)
  .add("with Icon", () => <AvatarIcon />);

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", () => <SizesColorsExample />);
