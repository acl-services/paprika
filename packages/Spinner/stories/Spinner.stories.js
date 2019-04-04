import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Basic from "./examples/Basic";

storiesOf("Spinner", module)
  .addDecorator(withKnobs)
  .add("Simple", () => <Basic />);
