import React from "react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react";

import Example from "./FormElementExample";

storiesOf("FormElement", module)
  // .addDecorator(withKnobs)
  .add("FormElement", () => <Example locale="en" />);
