import React from "react";
import { storiesOf } from "@storybook/react";
import L10n from "@paprika/l10n";
import Example from "./DatePickerExample";
import DatePicker from "../src/DatePicker";

storiesOf("DatePicker", module)
  .add("DatePicker", () => <Example locale="en" />)
  .add("DatePicker with locale", () => <Example locale="ja" />)
  .add("DatePicker with DatePicker.Input", () => (
    <L10n>
      <DatePicker className="custom-class-name" format="MM/DD/YYYY" onChange={() => {}}>
        <DatePicker.Input placeholder="custom placeholder" />
      </DatePicker>
    </L10n>
  ))
  .add("Calendar", () => (
    <L10n>
      <DatePicker.Calendar />
    </L10n>
  ));
