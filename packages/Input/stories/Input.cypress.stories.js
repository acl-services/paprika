import React from "react";
import { storiesOf } from "@storybook/react";
import windowHandles, { Input as InputWindowHandler } from "@paprika/testingHelpers/windowHandles/";
import Input from "../Input";

storiesOf("Input/Automation Tests/Cypress", module)
  .addDecorator(
    windowHandles({
      align: new Input(),
      isEager: new Input(),
    })
  )
  .add("Basic Popover Test", () => <InputWindowHandler placeholder="First Name" size="large" />);
