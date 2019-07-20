import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import AdvancedExample from "./examples/Advanced";
import BasicExample from "./examples/Basic";
import Basic2Example from "./examples/Basic2";

storiesOf("CollapsibleChecklists", module)
  .addDecorator(withKnobs)
  .add("Basic", () => <BasicExample />)
  .add("Basic2", () => <Basic2Example />)
  .add("Advanced", () => <AdvancedExample />);
