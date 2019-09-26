import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import momentPropTypes from "react-moment-proptypes";

import CalendarIcon from "@paprika/icon/lib/Calendar";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";
import useDebounce from "@paprika/helpers/lib/hooks/useDebounce";
import usePrevious from "@paprika/helpers/lib/hooks/usePrevious";
import isElementContainsFocus from "@paprika/helpers/lib/dom/isElementContainsFocus";

import Calendar from "./components/Calendar";
import DateInput from "./components/DateInput";
import DatePickerPopover from "./components/DatePickerPopover";
import { extractChildrenProps } from "./helpers";

import { calendarPopoverStyles } from "./DatePicker.styles";

const INPUT_PARSE_ERROR = "INPUT_PARSE";

const propTypes = {
  children: PropTypes.node,

  /** Date format used while entering and parsing user input. */
  dataFormat: PropTypes.string,

  /** Selected date in moment object. */
  date: momentPropTypes.momentObj,

  /** Date format used while displaying date. It should be human-friendly and spelled out, default is MMMM DD,YYYY */
  humanFormat: PropTypes.string,

  /** ID for the <input>.  Not required when wrapped with <FormElement>. */
  id: PropTypes.string,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should be read-only or not, default is false. */
  isReadOnly: PropTypes.bool,

  /** Callback when date is selected or input. */
  onChange: PropTypes.func.isRequired,

  /** Errors callback */
  onError: PropTypes.func,
};

const defaultProps = {
  children: null,
  dataFormat: "MM/DD/YYYY",
  date: null,
  humanFormat: undefined,
  id: null,
  isDisabled: false,
  isReadOnly: false,
  onError: () => {},
};

function DatePicker(props) {
  const I18n = useI18n();

  // Props
  const {
    children,
    dataFormat,
    date,
    humanFormat = I18n.t("datePicker.confirmation_format"),
    id,
    isDisabled,
    isReadOnly,
    onChange,
    onError,
  } = props;

  const formatDateProp = React.useCallback(
    format => {
      return date && date.isValid() ? moment.utc(date).format(format || humanFormat) : "";
    },
    [I18n, date, humanFormat]
  );

  // State
  const [confirmationResult, setConfirmationResult] = React.useState(formatDateProp(humanFormat));
  const [hasParsingError, setHasParsingError] = React.useState(false);
  const [inputtedString, setInputtedString] = React.useState(formatDateProp(dataFormat));
  const [possibleDate, setPossibleDate] = React.useState(null);
  const [shouldShowCalendar, setShouldShowCalendar] = React.useState(false);
  const prevDate = usePrevious(date);

  // Ref
  const calendarRef = React.useRef(null);
  const inputRef = React.useRef(null);

  // Effect
  React.useEffect(() => {
    if ((!date && !prevDate) || (date && prevDate && date.isSame(prevDate, "day"))) return;
    setInputtedString(formatDateProp(dataFormat));
    setConfirmationResult(formatDateProp(humanFormat));
  }, [dataFormat, date, prevDate, formatDateProp, humanFormat]);

  const debouncedPossibleDate = useDebounce(possibleDate, 300);
  const extendedInputProps = extractChildrenProps(children, DateInput);
  const extendedPopoverProps = extractChildrenProps(children, DatePickerPopover);

  function hideCalendar() {
    if (shouldShowCalendar) setShouldShowCalendar(false);
    inputRef.current.blur();
  }

  function showCalendar() {
    if (!shouldShowCalendar) setShouldShowCalendar(true);
  }

  function parseInput() {
    let newDate = moment.utc(inputtedString, dataFormat);

    if (!newDate.isValid()) newDate = moment.utc(inputtedString);

    return newDate;
  }

  function handleChange(newDate) {
    if (date !== newDate) onChange(newDate);
  }

  function handleClick() {
    if (!isReadOnly) showCalendar();
  }

  function handleClosePopover() {
    if (!isElementContainsFocus(calendarRef.current) && !isElementContainsFocus(inputRef.current)) {
      if (!hasParsingError) {
        setConfirmationResult(formatDateProp(humanFormat));
        setInputtedString(formatDateProp(dataFormat));
      }
      hideCalendar();
    }
  }

  function handleFocusInput() {
    if (!isReadOnly) setConfirmationResult("");
  }

  function handleReset() {
    setHasParsingError(false);
    setInputtedString("");
    handleChange(null);
  }

  function handleInputConfirm() {
    hideCalendar();

    if (!inputtedString) {
      handleReset();
      return;
    }

    const newDate = parseInput();

    if (newDate.isValid()) {
      setConfirmationResult(newDate.format(humanFormat));
      setHasParsingError(false);
      if (!moment(newDate).isSame(date, "day")) handleChange(newDate);
    } else {
      setConfirmationResult("");
      setHasParsingError(true);
      onError({ type: INPUT_PARSE_ERROR, value: inputtedString });
    }
  }

  function handleInputBlur() {
    window.requestAnimationFrame(() => {
      if (!isElementContainsFocus(calendarRef.current)) {
        handleInputConfirm();
      }
    });
  }

  function handleInputChange(e) {
    setInputtedString(e.target.value);
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      handleInputConfirm();
    } else {
      const updatedPossibleDate = parseInput();

      if (updatedPossibleDate.isSame(possibleDate, "year") && updatedPossibleDate.isSame(possibleDate, "month")) return;
      setPossibleDate(updatedPossibleDate);
    }
  }

  function handleKeyUpOnEscape(event) {
    if (event.key === "Escape") {
      hideCalendar();
    }
  }

  function handleResetPossibleDate() {
    setPossibleDate(null);
  }

  function handleSelect(selectedDate) {
    setHasParsingError(false);
    setConfirmationResult(selectedDate.format(humanFormat));
    hideCalendar();
    handleChange(selectedDate);
  }

  const hasError = extendedInputProps && extendedInputProps.hasError;

  return (
    <Popover
      offset={8}
      {...extendedPopoverProps}
      isOpen={shouldShowCalendar}
      onClose={handleClosePopover}
      onKeyUp={handleKeyUpOnEscape}
      shouldKeepFocus
    >
      <Input
        icon={<CalendarIcon />}
        id={id}
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
        hasError={hasError || hasParsingError}
      />

      <Popover.Content>
        <div css={calendarPopoverStyles} data-pka-anchor="datepicker.calendar" ref={calendarRef}>
          <Calendar
            date={date}
            isVisible={shouldShowCalendar}
            onSelect={handleSelect}
            possibleDate={debouncedPossibleDate}
            resetPossibleDate={handleResetPossibleDate}
          />
        </div>
      </Popover.Content>
    </Popover>
  );
}

DatePicker.displayName = "DatePicker";

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

DatePicker.Input = DateInput;
DatePicker.Popover = DatePickerPopover;

export default DatePicker;
