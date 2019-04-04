import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../Input";

storiesOf("Input/Automation Tests/Accessibility", module).add("Default", () => (
  <React.Fragment>
    <Input placeholder="First Name" size="large" />
  </React.Fragment>
));
