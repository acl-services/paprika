import React from "react";
import { storiesOf } from "@storybook/react";
import moment from "moment";
import L10n from "@paprika/l10n";
import SingleDateCalendar from "../src/SingleDateCalendar";

const noop = () => {};

storiesOf("Calendar / cypress", module).add("SingleDateCalendar test", () => {
  const [date, setDate] = React.useState(null);

  moment.locale("en");

  return (
    <L10n locale="en">
      <SingleDateCalendar date={date} onSelect={setDate} resetPossibleDate={noop} />
    </L10n>
  );
});
