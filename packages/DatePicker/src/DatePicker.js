import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import momentPropTypes from "react-moment-proptypes";

import CalendarIcon from "@paprika/icon/lib/Calendar";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import useI18n from "@paprika/l10n/lib/useI18n";

import CalendarController from "./components/CalendarController/CalendarController";

import { CalendarStyles } from "./DatePicker.styles";

const propTypes = {
  /** a11yText on the input. */
  a11yText: PropTypes.string,

  /** Class name of the input. */
  className: PropTypes.string,

  /** Selected date in moment object. */
  date: momentPropTypes.momentObj,

  /** Date format, will show in the input. */
  format: PropTypes.string,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should be read-only or not, default is false. */
  isReadOnly: PropTypes.bool,

  /** Callback when date is selected or input. */
  onChange: PropTypes.func.isRequired,

  /** Placeholder of input. */
  placeholder: PropTypes.string,

  /** Size of input. */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  className: null,
  date: null,
  format: "YYYY-MM-DD",
  isDisabled: false,
  isReadOnly: false,
  placeholder: "",
  size: "medium",
};

function DatePicker(props) {
  const I18n = useI18n();
  const dateFormatForConfirmation = I18n.t("dateInput.confirmation_format");
  const [confirmationResult, setConfirmationResult] = React.useState("");
  const [hasError, setHasError] = React.useState(false);
  const [inputtedString, setInputtedString] = React.useState(props.date ? moment(props.date).format(props.format) : "");
  const [shouldShowCalendar, setShouldShowCalendar] = React.useState(false);

  const calendarRef = React.useRef(null);

  function showCalendar() {
    if (!shouldShowCalendar) setShouldShowCalendar(true);
  }

  function hideCalendar() {
    if (shouldShowCalendar) setShouldShowCalendar(false);
  }

  function handleChange(newDate) {
    if (props.date !== newDate) props.onChange(newDate);
  }

  function handleReset() {
    setHasError(false);
    setInputtedString("");
    handleChange(null);
  }

  function handleSelect(date) {
    setHasError(false);
    setInputtedString(moment(date).format(props.format));
    hideCalendar();
    handleChange(date);
  }

  function handleFocusInput() {
    setConfirmationResult("");
  }

  function handleInputChange(e) {
    setInputtedString(e.target.value);
  }

  function handleInputConfirm() {
    if (!inputtedString) {
      handleReset();
      return;
    }

    const newDate = moment(inputtedString);

    if (newDate.isValid()) {
      if (moment(newDate).isSame(props.date, "day")) return;

      setConfirmationResult(newDate.format(dateFormatForConfirmation));
      setHasError(false);
      handleChange(newDate);
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
    }
  }

  function handleClick() {
    showCalendar();
  }

  return (
    <Popover isOpen={shouldShowCalendar} offset={8} onClose={hideCalendar} shouldKeepFocus>
      <Input
        a11yText={props.a11yText}
        className={props.className}
        hasError={hasError}
        icon={<CalendarIcon />}
        isDisabled={props.isDisabled}
        isReadOnly={props.isReadOnly}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        onClick={handleClick}
        onFocus={handleFocusInput}
        onKeyUp={handleKeyUp}
        placeholder={props.placeholder}
        size={props.size}
        value={confirmationResult || inputtedString}
      />

      <Popover.Content>
        <div css={CalendarStyles} ref={calendarRef}>
          <CalendarController date={props.date} onSelect={handleSelect} />
        </div>
      </Popover.Content>
    </Popover>
  );
}

DatePicker.displayName = "DatePicker";

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

DatePicker.CalendarController = CalendarController;

export default DatePicker;
