import React from "react";
import moment from "moment";
import DatePicker from "../src/DatePicker";

function Example() {
  const [date, setDate] = React.useState(moment());

  function handleChange(newDate) {
    setDate(newDate);
  }

  return <DatePicker date={date} format="MM/DD/YYYY" onChange={handleChange} />;
}

export default Example;
