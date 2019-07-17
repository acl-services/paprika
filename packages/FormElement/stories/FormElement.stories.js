import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react";

import Showcase from "./FormElementShowcase";

storiesOf("FormElement", module)
  .addDecorator(withKnobs)
  .add("FormElement", () => <Showcase locale="en" />);
