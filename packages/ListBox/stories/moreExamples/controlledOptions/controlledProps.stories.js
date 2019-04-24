/* eslint-disable react/no-multi-comp, react/prop-types */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Frame } from "../../stories.styles";
import Add from "./examples/Add";
import Option from "./examples/Option";

storiesOf("ListBox / more examples", module).add("Controlled Props / Children length", () => (
  <Frame>
    <Add />
  </Frame>
));

storiesOf("ListBox / more examples", module).add("Controlled Props / Option", () => (
  <Frame>
    <Option />
  </Frame>
));
