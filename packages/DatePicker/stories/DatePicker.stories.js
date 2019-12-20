import React from "react";
import moment from "moment";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Example from "./DatePickerExample";
import DatePicker from "../src/DatePicker";

storiesOf("DatePicker", module)
  .addDecorator(withKnobs)
  .add("DatePicker showcase", () => {
    const datePickerProps = () => ({
      dataFormat: select("dataFormat", ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"], "MM/DD/YYYY"),
      humanFormat: select("humanFormat", ["MMMM DD, YYYY", "YYYY-MM-DD"], "MMMM DD, YYYY"),
      isDisabled: boolean("isDisabled", false),
      isReadOnly: boolean("isReadOnly", false),
      hasError: boolean("hasError", false),
    });

    const inputProps = () => ({
      size: select("size", ["small", "medium", "large"], "medium"),
      placeholder: text("placeholder", ""),
    });
    return (
      <Example locale="en" {...datePickerProps()}>
        <DatePicker.Input {...inputProps()} />
        <DatePicker.Popover style={{ marginTop: "270px" }} />
      </Example>
    );
  })
  .add("DatePicker", () => <Example locale="en" />)
  .add("DatePicker with locale", () => <Example locale="zh" />)
  .add("DatePicker with initialDate", () => <Example initialDate={moment("2019-01-01")} />)
  .add("DatePicker with DatePicker.Input", () => (
    <Example>
      <DatePicker.Input className="custom-class-name" placeholder="custom placeholder" />
    </Example>
  ));
