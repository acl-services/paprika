import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import * as Select from "./examples/Basic";

storiesOf("Select", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <Select.Basic />)
  .add("With Selected Option", () => <Select.WithSelectedOption />)
  .add("With isDisabled", () => <Select.DisableSelect />)
  .add("With isReadOnly", () => <Select.ReadOnlySelect />);
