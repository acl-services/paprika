import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Basic, { basicProps } from "./examples/Basic";
import Controlled from "./examples/Controlled";
import WithTriggers from "./examples/WithTriggers";
import PositioningElement, { positioningProps } from "./examples/PositioningElement";
import ScrollContainer, { sampleTextProp } from "./examples/ScrollContainer";
import Transformed from "./examples/Transformed";

storiesOf("Popover", module)
  .addDecorator(withKnobs)
  .add("Basic", () => <Basic {...basicProps()} />)
  .add("Controlled", () => <Controlled />)
  .add("With Trigger Components", () => <WithTriggers />)
  .add("With Positioning Element", () => <PositioningElement {...positioningProps()} />)
  .add("With Scroll Container", () => <ScrollContainer {...basicProps()} {...sampleTextProp()} />);

storiesOf("Popover/Dev", module).add("Has container with a CSS transform", () => <Transformed />);
