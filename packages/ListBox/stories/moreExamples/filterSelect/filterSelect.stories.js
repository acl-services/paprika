/* eslint-disable react/no-multi-comp, react/prop-types */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Frame } from "../../stories.styles";
import FilterSelect from "./FilterSelect";

storiesOf("ListBox / more examples", module).add("Filter select", () => (
  <Frame>
    <FilterSelect />
  </Frame>
));
