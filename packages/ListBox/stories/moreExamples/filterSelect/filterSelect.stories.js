import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import { Frame } from "../../stories.styles";
import FilterSelect from "./FilterSelect";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Examples`, module).add("Filter select", () => (
  <Frame>
    <FilterSelect />
  </Frame>
));
