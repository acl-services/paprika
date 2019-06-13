import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import momentPropTypes from "react-moment-proptypes";

import CalendarIcon from "@paprika/icon/lib/Calendar";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";

import Calendar from "./components/Calendar";
import DateInput from "./components/DateInput";

import { CalendarStyles } from "./DatePicker.styles";
import { extractChildrenProps, useDebounce } from "./helpers";

const propTypes = {
  children: PropTypes.node,

  /** Selected date in moment object. */
  date: momentPropTypes.momentObj,

  /** Date format, will show in the date input. */
  format: PropTypes.string,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should be read-only or not, default is false. */
  isReadOnly: PropTypes.bool,

  /** Callback when date is selected or input. */
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  children: null,
  date: null,
  format: "MM/DD/YYYY",
  isDisabled: false,
  isReadOnly: false,
};

function DatePicker(props) {
  const I18n = useI18n();

  // Props
  const { children, date, format, isDisabled, isReadOnly, onChange } = props;

  // State
  const [confirmationResult, setConfirmationResult] = React.useState("");
  const [hasError, setHasError] = React.useState(false);
  const [inputtedString, setInputtedString] = React.useState(date ? moment.utc(date).format(format) : "");
  const [possibleDate, setPossibleDate] = React.useState(null);
  const [shouldShowCalendar, setShouldShowCalendar] = React.useState(false);

  // Ref
  const calendarRef = React.useRef(null);
  const inputRef = React.useRef(null);

  // Effect
  React.useEffect(() => {
    setInputtedString(date ? moment.utc(date).format(format) : "");
  }, [date]);

  const debouncedPossibleDate = useDebounce(possibleDate, 800);
  const extendedInputProps = extractChildrenProps(children);

  function parseInput() {
    let newDate = moment.utc(inputtedString, format);

    if (!newDate.isValid()) newDate = moment.utc(inputtedString);

    return newDate;
  }

  function showCalendar() {
    if (!shouldShowCalendar) setShouldShowCalendar(true);
  }

  function hideCalendar() {
    if (shouldShowCalendar) setShouldShowCalendar(false);
  }

  function handleChange(newDate) {
    if (date !== newDate) onChange(newDate);
  }

  function handleReset() {
    setHasError(false);
    setInputtedString("");
    handleChange(null);
  }

  function handleSelect(seletedDate) {
    setHasError(false);
    setConfirmationResult(seletedDate.format(I18n.t("dateInput.confirmation_format")));
    hideCalendar();
    handleChange(seletedDate);
  }

  function handleFocusInput() {
    setConfirmationResult("");
  }

  function handleInputChange(e) {
    setInputtedString(e.target.value);
  }

  function handleInputConfirm() {
    inputRef.current.blur();

    if (!inputtedString) {
      handleReset();
      return;
    }

    const newDate = parseInput();

    if (newDate.isValid()) {
      setHasError(false);
      setConfirmationResult(newDate.format(I18n.t("dateInput.confirmation_format")));
      if (!moment(newDate).isSame(date, "day")) handleChange(newDate);
    } else {
      setHasError(true);
    }
  }

  function handleInputBlur() {
    window.requestAnimationFrame(() => {
      if (calendarRef.current !== document.activeElement && !calendarRef.current.contains(document.activeElement)) {
        handleInputConfirm();
        hideCalendar();
      }
    });
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      handleInputConfirm();
      hideCalendar();
    } else {
      const updatedPossibleDate = parseInput();

      if (updatedPossibleDate.isSame(possibleDate, "year") && updatedPossibleDate.isSame(possibleDate, "month")) return;
      setPossibleDate(updatedPossibleDate);
    }
  }

  function handleClick() {
    if (!isReadOnly) showCalendar();
  }

  return (
    <Popover isOpen={shouldShowCalendar} offset={8} onClose={hideCalendar} shouldKeepFocus>
      <Input
        hasError={hasError}
        icon={<CalendarIcon />}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        onClick={handleClick}
        onFocus={handleFocusInput}
        onKeyUp={handleKeyUp}
        inputRef={inputRef}
        value={confirmationResult || inputtedString}
        {...extendedInputProps}
      />

      <Popover.Content>
        <div css={CalendarStyles} data-qa-anchor="datepicker.calendar" ref={calendarRef}>
          <Calendar date={date} possibleDate={debouncedPossibleDate} onSelect={handleSelect} />
        </div>
      </Popover.Content>
    </Popover>
  );
}

DatePicker.displayName = "DatePicker";

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

DatePicker.Calendar = Calendar;
DatePicker.Input = DateInput;

export default DatePicker;
