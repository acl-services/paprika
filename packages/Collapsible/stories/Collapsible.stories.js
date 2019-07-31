import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import BasicStory from "./examples/Basic";
import CollapsibleWithOperationsStory from "./examples/WithOperations";

storiesOf("Collapsible", module)
  .addDecorator(withKnobs)
  .add("Basic", () => <BasicStory />)
  .add("WithOperations", () => <CollapsibleWithOperationsStory />);
