import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import CalendarIcon from "@paprika/icon/lib/Calendar";
import Input from "@paprika/input";
import useI18n from "@paprika/l10n/lib/useI18n";

const INPUT_PARSE_ERROR = "INPUT_PARSE";

const propTypes = {
  /** If the value of <input> is valid or not. */
  hasError: PropTypes.bool,

  /** Date format used while entering and parsing user input. */
  dateFormat: PropTypes.string,

  /** Selected date in moment object. */
  date: PropTypes.instanceOf(moment),

  /** Date format used while displaying date. It should be human-friendly and spelled out, default is MMMM DD,YYYY */
  humanFormat: PropTypes.string,

  /** Callback when date is inputed. Will be called on blur or enter key press. */
  onChange: PropTypes.func,

  /** Callback when user inputs date. Will be called after every key up event. */
  onChangePossibleDate: PropTypes.func,

  /** Error callback. Will be called on blur or enter key press if inputted date can't be parsed. */
  onError: PropTypes.func,

  onClick: PropTypes.func,

  /** Guard function. If it returns true - confirmation will be prevented. */
  denyConfirmation: PropTypes.func,

  /** Callback when confirm */
  beforeConfirmation: PropTypes.func,
};

const noop = () => {};

const defaultProps = {
  hasError: false,
  dateFormat: "MM/DD/YYYY",
  date: null,
  humanFormat: undefined,
  onChange: noop,
  onChangePossibleDate: noop,
  onError: noop,
  onClick: noop,
  denyConfirmation: () => false,
  beforeConfirmation: noop,
};

const DateInput = React.forwardRef((props, ref) => {
  const I18n = useI18n();

  const {
    hasError,
    date,
    dateFormat,
    humanFormat = I18n.t("datePicker.confirmation_format"),
    onChange,
    onChangePossibleDate,
    onError,
    onClick,
    denyConfirmation,
    beforeConfirmation,
    ...restProps
  } = props;

  const [hasParsingError, setHasParsingError] = React.useState(false);
  const [inputtedString, setInputtedString] = React.useState(date ? date.format(dateFormat) : "");
  const [hasFocus, setFocus] = React.useState(false);

  React.useEffect(() => {
    if (date) {
      setInputtedString(date.format(dateFormat));
      setHasParsingError(false);
    }
  }, [dateFormat, date]);

  const hasErrorValue = hasError || hasParsingError;

  let inputText;
  if (hasFocus || denyConfirmation() || hasErrorValue) {
    inputText = inputtedString;
  } else {
    inputText = date ? date.format(humanFormat) : "";
  }

  function handleReset() {
    setHasParsingError(false);
    setInputtedString("");
    onChange(null);
  }

  function parseInput() {
    const newDate = moment(inputtedString, dateFormat);

    return newDate.isValid() ? newDate : moment(inputtedString);
  }

  function handleInputConfirm() {
    if (denyConfirmation()) {
      return;
    }

    beforeConfirmation();

    if (!inputtedString) {
      handleReset();
      return;
    }

    const newDate = parseInput();

    if (newDate.isValid()) {
      setHasParsingError(false);
      setInputtedString(newDate.format(dateFormat));
      if (!moment(newDate).isSame(date, "day")) onChange(newDate);
    } else {
      setHasParsingError(true);
      onError({ type: INPUT_PARSE_ERROR, value: inputtedString });
    }
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      handleInputConfirm();
    } else {
      const updatedPossibleDate = parseInput();

      onChangePossibleDate(updatedPossibleDate);
    }
  }

  function handleInputChange(e) {
    setInputtedString(e.target.value);
  }

  function handleClick() {
    if (!restProps.isReadOnly) {
      onClick();
    }
  }

  function handleInputBlur() {
    window.requestAnimationFrame(() => {
      setFocus(false);
      handleInputConfirm();
    });
  }

  function handleFocus() {
    setFocus(true);
  }

  return (
    <Input
      icon={<CalendarIcon />}
      {...restProps}
      onChange={handleInputChange}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      inputRef={ref}
      value={inputText}
      onFocus={handleFocus}
      onBlur={handleInputBlur}
      hasError={hasErrorValue}
    />
  );
});

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default DateInput;
