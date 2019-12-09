import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Basic from "./examples/Basic";
import Controlled from "./examples/Controlled";
import WithTriggers from "./examples/WithTriggers";
import PositioningElement from "./examples/PositioningElement";
import ScrollContainer from "./examples/ScrollContainer";
import Transformed from "./examples/Transformed";
import FocusTest from "./examples/FocusTest";
import A11y from "./examples/A11y";
import Cypress, { propHandles } from "./examples/Cypress";
import Screener from "./examples/Screener";
import DynamicContent from "./examples/DynamicContent";

const experimentalParameters = {
  docs: {
    page: null,
  },
  options: {
    isToolshown: true,
    showPanel: true,
    selectedPanel: "storybook/knobs/panel",
    panelPosition: "bottom",
  },
};

storiesOf("Popover", module)
  .addDecorator(withKnobs)
  .add("Basic", Basic)
  .add("Controlled", () => <Controlled />)
  .add("With Trigger Components", () => <WithTriggers />)
  .add("With Positioning Element", PositioningElement)
  .add("With Dynamic Content", DynamicContent);

storiesOf("Popover", module)
  .addParameters(experimentalParameters)
  .addDecorator(withKnobs)
  .add("With Scroll Container", ScrollContainer);

storiesOf("Popover/Dev", module)
  .add("Has container with a CSS transform", () => <Transformed />)
  .add("Testing Focus Management", () => <FocusTest />);

storiesOf("Popover/Automation Tests", module)
  .add("Accessibility", () => <A11y />)
  .add("Screener", () => <Screener />);

storiesOf("Popover/Automation Tests", module)
  .addDecorator(propHandles)
  .add("Cypress", Cypress);
