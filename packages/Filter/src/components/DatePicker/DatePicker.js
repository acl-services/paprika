import React from "react";
import PropTypes from "prop-types";
import DatePicker from "@paprika/date-picker";
import moment from "moment";

const propTypes = {
  initialDate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  parsingFormat: PropTypes.string.isRequired,
};

export default function DatePickerWrapper(props) {
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

  return (
    <DatePicker onChange={handleChange} date={date}>
      <DatePicker.Popover data-pka-anchor="filter.item.valueInput--date" zIndex={7} edge="left" />
    </DatePicker>
  );
}

DatePickerWrapper.propTypes = propTypes;
