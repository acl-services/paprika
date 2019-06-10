import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "./DatePickerExample";

storiesOf("DatePicker", module)
  .add("DatePicker", () => <Example locale="en" />)
  .add("DatePicker with locale", () => <Example locale="ja" />);
