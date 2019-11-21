import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";

storiesOf("DialogAction", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);
