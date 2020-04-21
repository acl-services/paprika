import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";
import AlternateLayoutsStory from "./examples/AlternateLayouts";
import AccessibilityExample from "./examples/AccessibilityExample";

storiesOf("Form Element", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("AlternateLayouts", AlternateLayoutsStory)
  .add("AccessibilityExample", AccessibilityExample);

storiesOf("FormElement/Automation Tests", module);
