import React from "react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import moment from "moment";
import L10n from "@paprika/l10n";
import { DateRangePickerStory } from "./DateRangePicker.stories.styles";
import DateRangePicker from "../src";

const storyName = getStoryName("DateRangePicker");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", () => {
    const dateRangePickerProps = {
      dateFormat: select("dateFormat", ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"], "MM/DD/YYYY"),
      humanFormat: select("humanFormat", ["MMMM DD, YYYY", "YYYY-MM-DD"], "MMMM DD, YYYY"),
      isDisabled: boolean("isDisabled", false),
      isReadOnly: boolean("isReadOnly", false),
      hasError: boolean("hasError", false),
    };

    const inputProps = {
      size: select("DateRangePicker.Input - size", [undefined, "small", "medium", "large"], undefined),
    };
    const startInputProps = {
      placeholder: text("DateRangePicker.StartInput - placeholder", "") || undefined,
    };
    const endInputProps = {
      placeholder: text("DateRangePicker.EndInput - placeholder", "") || undefined,
    };

    const [{ startDate, endDate }, setDates] = React.useState({ startDate: null, endDate: null });

    moment.locale("en");

    return (
      <L10n locale="en">
        <DateRangePickerStory>
          <DateRangePicker startDate={startDate} endDate={endDate} onDatesChange={setDates} {...dateRangePickerProps}>
            <DateRangePicker.Input {...inputProps} />
            <DateRangePicker.StartInput {...startInputProps} />
            <DateRangePicker.EndInput {...endInputProps} />
          </DateRangePicker>
          <p>Start date: {startDate ? startDate.format(dateRangePickerProps.humanFormat) : <i>empty</i>}</p>
          <p>End date: {endDate ? endDate.format(dateRangePickerProps.humanFormat) : <i>empty</i>}</p>
        </DateRangePickerStory>
      </L10n>
    );
  });

storiesOf(`${storyName}/Backyard/Tests`, module).add("Cypress", () => {
  const [{ startDate, endDate }, setDates] = React.useState({ startDate: null, endDate: null });

  moment.locale("en");

  return (
    <L10n locale="en">
      <DateRangePickerStory>
        <DateRangePicker startDate={startDate} endDate={endDate} onDatesChange={setDates}>
          <DateRangePicker.StartInput data-pka-anchor="daterangepicker.startinput" />
          <DateRangePicker.EndInput data-pka-anchor="daterangepicker.endinput" />
        </DateRangePicker>
      </DateRangePickerStory>
    </L10n>
  );
});