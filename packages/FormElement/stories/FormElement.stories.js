import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ShowcaseStory from "./examples/Showcase";
import AlternateLayoutsStory from "./examples/AlternateLayouts";
import AccessibilityExample from "./examples/AccessibilityExample";

const storyName = getStoryName("FormElement");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("AlternateLayouts", AlternateLayoutsStory)
  .add("AccessibilityExample", AccessibilityExample);

storiesOf(`${storyName}/Automation Tests`, module);
