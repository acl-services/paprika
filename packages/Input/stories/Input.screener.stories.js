import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../Input";

storiesOf("Input/Automation Tests/Screener", module).add("basic", () => (
  <React.Fragment>
    <Input placeholder="First Name" size="large" />
  </React.Fragment>
));
