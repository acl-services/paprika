import React from "react";
import { storiesOf } from "@storybook/react";
import moment from "moment";
import L10n from "@paprika/l10n";
import { getStoryName } from "storybook/storyTree";
import SingleDateCalendar from "../src/SingleDateCalendar";
import DateRangeCalendar from "../src/DateRangeCalendar";
import { START_DATE } from "../src/tokens";

const storyName = getStoryName("Calendar");

const noop = () => {};

storiesOf(`${storyName}/Backyard/Tests/Cypress`, module)
  .add("SingleDateCalendar test", () => {
    const [date, setDate] = React.useState(null);

    moment.locale("en");

    return (
      <L10n locale="en">
        <SingleDateCalendar date={date} onSelect={setDate} resetPossibleDate={noop} />
      </L10n>
    );
  })
  .add("DateRangeCalendar test", () => {
    const [currentInput, setCurrentInput] = React.useState(START_DATE);
    const [{ startDate, endDate }, setDates] = React.useState({ startDate: null, endDate: null });

    return (
      <L10n locale="en">
        <DateRangeCalendar
          startDate={startDate}
          endDate={endDate}
          onDatesChange={setDates}
          focusedInput={currentInput || START_DATE}
          onFocusChange={setCurrentInput}
        />
      </L10n>
    );
  });
