import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import L10n from "@paprika/l10n";
import { getStoryName } from "storybook/storyTree";
import SingleDateCalendar from "../src/SingleDateCalendar";
import DateRangeCalendar from "../src/DateRangeCalendar";
import ShortCutPanel from "../src/internal/ShortcutPanel";
import { START_DATE } from "../src/tokens";

const storyName = getStoryName("Calendar");

const noop = () => {};

storiesOf(`${storyName}/Backyard/Tests/Screener`, module)
  .add("SingleDateCalendar", () => (
    <L10n>
      <SingleDateCalendar date={moment("2019-01-01", "YYYY-MM-DD")} onSelect={noop} />
    </L10n>
  ))
  .add("DateRangeCalendar", () => (
    <L10n>
      <DateRangeCalendar
        startDate={moment("2019-01-02", "YYYY-MM-DD")}
        endDate={moment("2019-01-10", "YYYY-MM-DD")}
        onDatesChange={noop}
        onFocusChange={noop}
        focusedInput={START_DATE}
      />
    </L10n>
  ))
  .add("Shortcut panel", () => (
    <L10n>
      <ShortCutPanel isVisible date={moment("2019-01-01", "YYYY-MM-DD")} onCancel={noop} onConfirm={noop} />
    </L10n>
  ));
