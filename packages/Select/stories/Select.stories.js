import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import * as Select from "./examples/Basic";

storiesOf("Select", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <Select.Basic />);

storiesOf("Select", module)
  .addDecorator(withKnobs)
  .add("With isDisabled", () => <Select.DisableSelect />);

storiesOf("Select", module)
  .addDecorator(withKnobs)
  .add("With isReadOnly", () => <Select.ReadOnlySelect />);
