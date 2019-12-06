import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";
import ControlledStory from "./examples/Controlled";

storiesOf("Radio", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("Controlled", ControlledStory);
