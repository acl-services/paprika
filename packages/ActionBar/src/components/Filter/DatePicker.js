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

  function getMomentDate(dateStr) {
    return dateStr === "" ? null : moment(dateStr, parsingFormat);
  }

  const memorizedGetMomentDate = React.useCallback(getMomentDate, [parsingFormat]);
  const [date, setDate] = React.useState(memorizedGetMomentDate(initialDate));

  React.useEffect(() => {
    setDate(memorizedGetMomentDate(initialDate));
  }, [initialDate, parsingFormat, memorizedGetMomentDate]);

  function handleChange(newDate) {
    setDate(newDate);
    onChange(newDate);
  }

  return <PaprikaDatePicker onChange={handleChange} date={date} />;
}

DatePicker.propTypes = propTypes;
