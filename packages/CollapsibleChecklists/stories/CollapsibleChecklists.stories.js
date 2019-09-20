import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

// import AdvancedExample from "./examples/Advanced";
import BasicExample from "./examples/Basic";

storiesOf("CollapsibleChecklists", module)
  .addDecorator(withKnobs)
  .add("Basic", () => <BasicExample />);
// .add("Advanced", () => <AdvancedExample />);
