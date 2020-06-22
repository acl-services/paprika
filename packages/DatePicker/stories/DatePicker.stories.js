import React from "react";
import moment from "moment";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Example from "./DatePickerExample";
import DatePicker from "../src/DatePicker";

const storyName = getStoryName("DatePicker");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", () => {
    const datePickerProps = () => ({
      dateFormat: select("dateFormat", ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"], "MM/DD/YYYY"),
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
  });

storiesOf(`${storyName}/Examples`, module)
  .add("Basic", () => <Example locale="en" />)
  .add("with locale", () => <Example locale="zh" />)
  .add("with initialDate", () => <Example initialDate={moment("2019-01-01")} />)
  .add("with DatePicker.Input", () => (
    <Example locale="en">
      <DatePicker.Input className="custom-class-name" placeholder="custom placeholder" />
    </Example>
  ));

storiesOf(`${storyName}/Backyard/Tests`, module).add("Cypress", () => (
  <Example locale="en">
    <DatePicker.Input data-pka-anchor="datepicker.input" />
  </Example>
));
