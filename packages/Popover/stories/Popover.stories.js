import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
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

const storyName = getStoryName("Popover");

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

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Basic);

storiesOf(`${storyName}/Examples`, module)
  .addDecorator(withKnobs)
  .add("Controlled", () => <Controlled />)
  .add("With Trigger Components", () => <WithTriggers />)
  .add("With Positioning Element", PositioningElement)
  .add("With Dynamic Content", DynamicContent);

storiesOf(`${storyName}/Examples`, module)
  .addParameters(experimentalParameters)
  .addDecorator(withKnobs)
  .add("With Scroll Container", ScrollContainer);

storiesOf(`${storyName}/Backyard/Sandbox`, module)
  .add("Has container with a CSS transform", () => <Transformed />)
  .add("Testing Focus Management", () => <FocusTest />);

storiesOf(`${storyName}/Backyard/Tests`, module)
  .add("Accessibility", () => <A11y />)
  .add("Screener", () => <Screener />);

storiesOf(`${storyName}/Backyard/Tests`, module)
  .addDecorator(propHandles)
  .add("Cypress", Cypress);
