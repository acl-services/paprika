import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";
import AlternateLayoutsStory from "./examples/AlternateLayouts";

storiesOf("FormElement", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("AlternateLayouts", AlternateLayoutsStory);

storiesOf("FormElement/Automation Tests", module);
