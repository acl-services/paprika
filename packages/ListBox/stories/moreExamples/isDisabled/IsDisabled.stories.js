import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import { Frame } from "../../stories.styles";
import IsDisabled from "./IsDisabled";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Examples`, module).add("Is disabled", () => (
  <Frame>
    <IsDisabled />
  </Frame>
));
