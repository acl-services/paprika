import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";
import GroupingStory from "./examples/Grouping";

storiesOf("Radio", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("Grouping", GroupingStory);
