import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "./DatePickerExample";
import DatePicker from "../src/DatePicker";

storiesOf("DatePicker / cypress", module).add("DatePicker test", () => (
  <Example locale="en">
    <DatePicker.Input data-qa-anchor="datepicker-input" />
  </Example>
));
