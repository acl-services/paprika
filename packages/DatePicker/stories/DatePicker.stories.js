import React from "react";
import { storiesOf } from "@storybook/react";
import L10n from "@paprika/L10n";
import Example from "./DatePickerExample";
import DatePicker from "../src/DatePicker";

storiesOf("DatePicker", module)
  .add("DatePicker", () => <Example locale="en" />)
  .add("DatePicker with locale", () => <Example locale="ja" />)
  .add("Calendar", () => (
    <L10n>
      <DatePicker.CalendarController />
    </L10n>
  ));
