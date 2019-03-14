import React from "react";
import { storiesOf } from "@storybook/react";
import Basic from "./examples/Basic";
import OldRef from "./examples/OldRef";

storiesOf("RawButton", module)
  .add("Basic", () => <Basic />)
  .add("Old Ref", () => <OldRef />);
