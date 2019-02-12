import React from "react";
import { storiesOf } from "@storybook/react";

import Basic from "./examples/Basic";
import Controlled from "./examples/Controlled";
import WithTriggers from "./examples/WithTriggers";
import PositioningElement from "./examples/PositioningElement";
import ScrollContainer from "./examples/ScrollContainer";
import Transformed from "./examples/Transformed";

storiesOf("Popover", module)
  .add("Basic", () => <Basic />)
  .add("Controlled", () => <Controlled />)
  .add("With Trigger Components", () => <WithTriggers />)
  .add("With Positioning Element", () => <PositioningElement />)
  .add("With Scroll Container", () => <ScrollContainer />);

storiesOf("Popover/Dev", module).add("Has container with a CSS transform", () => <Transformed />);
