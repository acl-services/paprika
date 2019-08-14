import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Basic from "./examples/Basic";
import Controlled from "./examples/Controlled";
import WithTriggers from "./examples/WithTriggers";
import PositioningElement from "./examples/PositioningElement";
import ScrollContainer from "./examples/ScrollContainer";
import Transformed from "./examples/Transformed";
import ControlledScroll from "./examples/ControlledScroll";

storiesOf("Popover", module)
  .addDecorator(withKnobs)
  .add("Basic", Basic)
  .add("Controlled", () => <Controlled />)
  .add("With Trigger Components", () => <WithTriggers />)
  .add("With Positioning Element", PositioningElement)
  .add("With Scroll Container", ScrollContainer);

storiesOf("Popover/Dev", module)
  .addDecorator(withKnobs)
  .add("Has container with a CSS transform", () => <Transformed />)
  .add("Has scrolling as controlled component", () => <ControlledScroll />);
