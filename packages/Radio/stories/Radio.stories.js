// import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
// import { Story } from "storybook/assets/styles/common.styles";
import ShowcaseStory from "./examples/Showcase";

storiesOf("Radio", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);
