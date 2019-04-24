import React from "react";
import { storiesOf } from "@storybook/react";
import Basic from "./examples/Basic";
import NewRef from "./examples/NewRef";
import OldRef from "./examples/OldRef";
import CloseButtonRef from "./examples/CloseButtonRef";

storiesOf("Button", module)
  .add("Basic", () => <Basic />)
  .add("Ref", () => <NewRef />)
  .add("Old Ref", () => <OldRef />)
  .add("CloseButton Ref", () => <CloseButtonRef />);
