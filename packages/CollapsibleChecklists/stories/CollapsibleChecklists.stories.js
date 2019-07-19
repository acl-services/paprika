import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import BasicExample from "./examples/Basic";
import AdvancedExample from "./examples/Advanced";

storiesOf("CollapsibleChecklists", module)
  .addDecorator(withKnobs)
  .add("Basic", () => <BasicExample />)
  .add("Advanced", () => <AdvancedExample />);
