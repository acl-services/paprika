import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Showcase from "./examples/Showcase";
import Basic from "./examples/Basic";
import NewRef from "./examples/NewRef";
import OldRef from "./examples/OldRef";
import CloseButtonRef from "./examples/CloseButtonRef";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <Showcase />)
  .add("Basic", () => <Basic />)
  .add("Ref", () => <NewRef />)
  .add("Old Ref", () => <OldRef />)
  .add("Button.Close Ref", () => <CloseButtonRef />);
