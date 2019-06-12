import React from "react";
import moment from "moment";
import L10n from "@paprika/l10n";
import DatePicker from "../src/DatePicker";

function Example(props) {
  const { initialDate, children, locale, ...moreProps } = props;
  const [date, setDate] = React.useState(initialDate || null);

  moment.locale(locale || "en");

  function handleChange(newDate) {
    setDate(newDate);
  }

  return (
    <L10n locale={props.locale}>
      <DatePicker date={date} onChange={handleChange} {...moreProps}>
        {children}
      </DatePicker>
    </L10n>
  );
}

export default Example;
