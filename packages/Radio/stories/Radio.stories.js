import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";

storiesOf("Radio", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);
