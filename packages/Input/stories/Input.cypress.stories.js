import React from "react";
import { storiesOf } from "@storybook/react";
import windowHandles, { testingHandleInput } from "@paprika/testingHelpers/windowHandles/";
import Input from "../Input";

storiesOf("Input/Automation Tests/Cypress", module)
  .addDecorator(
    windowHandles({
      align: new testingHandleInput(),
      isEager: new testingHandleInput(),
    })
  )
  .add("Basic Popover Test", () => <Input placeholder="First Name" size="large" />);
