import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import CalendarIcon from "@paprika/icon/lib/Calendar";
import Input from "@paprika/input";
import { ShirtSizes, isMomentObjectOrNull } from "@paprika/helpers/lib/customPropTypes";
import isElementContainsFocus from "@paprika/helpers/lib/dom/isElementContainsFocus";
import useI18n from "@paprika/l10n/lib/useI18n";

const INPUT_PARSE_ERROR = "INPUT_PARSE";

const propTypes = {
  /** a11yText on the input. */
  a11yText: PropTypes.string,

  /** Placeholder of input. */
  placeholder: PropTypes.string,

  /** Size of input. */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),

  /** If the value of <input> is valid or not. */
  hasError: PropTypes.bool,

  id: PropTypes.string,

  isDisabled: PropTypes.bool,

  isReadOnly: PropTypes.bool,

  /** Date format used while entering and parsing user input. */
  dateFormat: PropTypes.string,

  date: isMomentObjectOrNull,

  possibleDate: isMomentObjectOrNull,

  /** Date format used while displaying date. It should be human-friendly and spelled out, default is MMMM DD,YYYY */
  humanFormat: PropTypes.string,

  onChange: PropTypes.func,

  onChangePossibleDate: PropTypes.func,

  onError: PropTypes.func,

  onClick: PropTypes.func,

  denyConfirmation: PropTypes.func,

  beforeConfirmation: PropTypes.func,
};

const defaultProps = {
  a11yText: null,
  placeholder: "",
  size: ShirtSizes.MEDIUM,
  hasError: false,
  id: undefined,
  isDisabled: false,
  isReadOnly: false,
  dateFormat: "MM/DD/YYYY",
  date: null,
  possibleDate: null,
  humanFormat: undefined,
  onChange: () => {},
  onChangePossibleDate: () => {},
  onError: () => {},
  onClick: () => {},
  denyConfirmation: () => false,
  beforeConfirmation: () => {},
};

const DateInput = React.forwardRef((props, ref) => {
  const I18n = useI18n();

  const {
    hasError,
    date,
    possibleDate,
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

  const internalRef = React.useRef(null);

  const inputRef = ref || internalRef;

  // Effect
  React.useEffect(() => {
    if (date) {
      setInputtedString(date.format(dateFormat));
      setHasParsingError(false);
    }
  }, [dateFormat, date]);

  const hasErrorValue = hasError || hasParsingError;

  let inputText;
  if ((inputRef && isElementContainsFocus(inputRef.current)) || hasErrorValue) {
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
    let newDate = moment(inputtedString, dateFormat);

    if (!newDate.isValid()) newDate = moment(inputtedString);

    return newDate;
  }

  function handleInputConfirm() {
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

      if (updatedPossibleDate.isSame(possibleDate, "year") && updatedPossibleDate.isSame(possibleDate, "month")) return;
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
      if (!denyConfirmation()) {
        handleInputConfirm();
      }
    });
  }

  return (
    <Input
      icon={<CalendarIcon />}
      onBlur={handleInputBlur}
      onChange={handleInputChange}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      inputRef={inputRef}
      value={inputText}
      {...restProps}
      hasError={hasErrorValue}
    />
  );
});

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default DateInput;
