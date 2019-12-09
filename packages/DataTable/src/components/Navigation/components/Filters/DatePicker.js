import React from "react";
import PropTypes from "prop-types";
import PaprikaDatePicker from "@paprika/date-picker";
import moment from "moment";

const propTypes = {
  initialDate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  parsingFormat: PropTypes.string.isRequired,
};

export default function DatePicker(props) {
  const { initialDate, onChange, parsingFormat } = props;
  const [date, setDate] = React.useState(moment(initialDate, parsingFormat));

  React.useEffect(() => {
    setDate(moment(initialDate, parsingFormat));
  }, [initialDate, parsingFormat]);

  function handleChange(newDate) {
    setDate(newDate);
    onChange(newDate);
  }

  return <PaprikaDatePicker onChange={handleChange} date={date} />;
}

DatePicker.propTypes = propTypes;
