import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ShowcaseStory from "./examples/Showcase";

storiesOf("DropDownMenu", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);
