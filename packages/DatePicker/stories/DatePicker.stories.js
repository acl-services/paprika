import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import L10n from "@paprika/l10n";
import Example from "./DatePickerExample";
import DatePicker from "../src/DatePicker";

storiesOf("DatePicker", module)
  .add("DatePicker", () => <Example locale="en" />)
  .add("DatePicker with locale", () => <Example locale="ja" />)
  .add("DatePicker with initialDate", () => <Example initialDate={moment("2019-01-01")} />)
  .add("DatePicker with DatePicker.Input", () => (
    <Example format="YYYY-MM-DD">
      <DatePicker.Input className="custom-class-name" placeholder="custom placeholder" />
    </Example>
  ))
  .add("Calendar", () => (
    <L10n>
      <DatePicker.Calendar />
    </L10n>
  ));
