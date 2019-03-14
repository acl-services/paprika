import React from "react";
import { storiesOf } from "@storybook/react";
import Basic from "./examples/Basic";
import NewRef from "./examples/NewRef";
import OldRef from "./examples/OldRef";

storiesOf("Button", module)
  .add("Basic", () => <Basic />)
  .add("Ref", () => <NewRef />)
  .add("Old Ref", () => <OldRef />);
