import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { CheckboxStory } from "./Checkbox.stories.styles";
import CheckboxExample from "./examples/CheckboxExample";
import ShowcaseStory from "./examples/Showcase";

storiesOf("Checkbox", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf("Checkbox/Automation Tests/Screener", module).add("CheckboxExample", () => (
  <CheckboxStory>
    <CheckboxExample size="medium" />
  </CheckboxStory>
));
