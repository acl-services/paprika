import React from "react";
import { storiesOf } from "@storybook/react";
import Basic from "./examples/Basic";
import { withKnobs } from "@storybook/addon-knobs";

storiesOf("Spinner", module)
  .addDecorator(withKnobs)
  .add("Simple", () => <Basic />);
