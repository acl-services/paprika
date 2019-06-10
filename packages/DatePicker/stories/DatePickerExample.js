import React from "react";
import moment from "moment";
import L10n from "@paprika/l10n";
import DatePicker from "../src/DatePicker";

function Example(props) {
  if (props.locale) moment.locale(props.locale);

  const [date, setDate] = React.useState(moment());

  function handleChange(newDate) {
    setDate(newDate);
  }

  return (
    <L10n locale={props.locale}>
      <DatePicker date={date} format="MM/DD/YYYY" onChange={handleChange} />
    </L10n>
  );
}

export default Example;
