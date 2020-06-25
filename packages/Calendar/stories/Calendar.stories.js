import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import moment from "moment";
import L10n from "@paprika/l10n";
import DateRangeCalendar from "../src/DateRangeCalendar";
import SingleDateCalendar from "../src/SingleDateCalendar";
import { START_DATE } from "../src/tokens";

const storyName = getStoryName("Calendar");

const noop = () => {};

moment.locale("en");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("SingleDateCalendar Showcase", () => {
    const [date, setDate] = React.useState(null);

    return (
      <L10n locale="en">
        <Story>
          <SingleDateCalendar date={date} onSelect={setDate} resetPossibleDate={noop} />
          <p>Selected date: {date ? date.format("MMMM DD, YYYY") : <i>none</i>}</p>
        </Story>
      </L10n>
    );
  })
  .add("DateRangeCalendar Showcase", () => {
    const [currentInput, setCurrentInput] = React.useState(START_DATE);
    const [{ startDate, endDate }, setDates] = React.useState({ startDate: null, endDate: null });

    return (
      <L10n locale="en">
        <Story>
          <DateRangeCalendar
            startDate={startDate}
            endDate={endDate}
            onDatesChange={setDates}
            resetPossibleDate={noop}
            focusedInput={currentInput || START_DATE}
            onFocusChange={setCurrentInput}
          />
          <p>Selected start date: {startDate ? startDate.format("MMMM DD, YYYY") : <i>none</i>}</p>
          <p>Selected end date: {endDate ? endDate.format("MMMM DD, YYYY") : <i>none</i>}</p>
        </Story>
      </L10n>
    );
  });
