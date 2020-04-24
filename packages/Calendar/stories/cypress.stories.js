import React from "react";
import { storiesOf } from "@storybook/react";

import moment from "moment";
import L10n from "@paprika/l10n";

import SingleDateCalendar from "../src/SingleDateCalendar";

const noop = () => {};

function Example(props) {
  const { initialDate, locale } = props;
  const [date, setDate] = React.useState(initialDate || null);

  moment.locale(locale === "zh" ? "zh-cn" : locale || "en");

  function handleChange(newDate) {
    setDate(newDate);
  }

  return (
    <L10n locale={props.locale}>
      <SingleDateCalendar date={date} onSelect={handleChange} resetPossibleDate={noop} />
    </L10n>
  );
}

storiesOf("Calendar / cypress", module)
  .add("SingleDateCalendar test", () => (
    <Example />
  ));


