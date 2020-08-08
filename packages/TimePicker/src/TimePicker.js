/**
 * THIS IS A PORT FROM ROBOTS APP
 * 1. this require trim a refactor to be at paprika standards.
 * please deselect the jsx-a11y/no-noninteractive-tabindex jsx-a11y/aria-props to fix
 * a11y issue
 * 2. include a proper FormElement and render the `this.state.error` properly inside of it
 * 3. remove class name and create proper styled-component components
 * 4. refactor the files to be functional components and hooks.
 * 5. replace the current picker and the code on handleBlur and handleFocus with a popover
 */

import React from "react";
import PropTypes from "prop-types";
import FormElement from "@paprika/form-element";
import Input from "@paprika/input";
import L10n from "@paprika/l10n";
import Popover from "@paprika/popover";
import Picker from "./components/Picker/Picker";
import TimeInterpreter from "./TimeInterpreter";
import * as sc from "./TimePicker.styles";

const getExplodeTime = TimeInterpreter.parse;

const propTypes = {
  /** Descriptive a11y text for assistive technologies. */
  a11yText: PropTypes.string,

  /** If the TimePicker is set to visible */
  defaultIsOpen: PropTypes.bool,

  /** */
  defaultValue: PropTypes.string, // it been use on getDerivedStateFromProps which is a useEffect in pre-era of hooks

  /** If the TimePicker is disabled */
  isDisabled: PropTypes.bool,

  /** */
  labelAM: PropTypes.string,

  /** */
  labelCustom: PropTypes.string,

  /** */
  labelError: PropTypes.string,

  /** */
  labelHours: PropTypes.string,

  /** */
  labelMinutes: PropTypes.string,

  /** */
  labelPeriod: PropTypes.string,

  /** */
  labelPM: PropTypes.string,

  /** */
  onChange: PropTypes.func,

  /** */
  prefix: PropTypes.string,
};

const defaultProps = {
  a11yText: "Time (hh:mm)",
  defaultIsOpen: false,
  defaultValue: null,
  labelCustom: "Custom",
  labelError: "Invalid Format",
  labelHours: "Hours",
  labelMinutes: "Minutes",
  labelPeriod: "Period",
  labelAM: "am",
  labelPM: "pm",
  isDisabled: false,
  onChange: () => {},
  prefix: "timePicker",
};

function TimePicker(props) {
  const {
    a11yText,
    defaultIsOpen,
    defaultValue,
    labelCustom,
    labelError,
    labelHours,
    labelMinutes,
    labelPeriod,
    labelAM,
    labelPM,
    isDisabled,
    onChange,
    prefix,
    ...moreProps
  } = props;

  const [isOpen, setIsOpen] = React.useState(defaultIsOpen);
  const [time, setTime] = React.useState(() => {
    if (defaultValue) {
      const defaultTime = getExplodeTime(defaultValue);
      return {
        hh: defaultTime.hh,
        mm: defaultTime.mm,
        period: defaultTime.period,
      };
    }
    return {
      hh: null,
      mm: null,
      period: null,
    };
  });
  const [timeStr, setTimeStr] = React.useState(null);
  const [isTabIndexActive, setIsTabIndexActive] = React.useState(0);
  const [value, setValue] = React.useState(defaultValue);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (defaultValue) {
      const { hh, mm, period, error, timeStr: newTimeStr, value: newValue } = getExplodeTime(defaultValue);

      if (error) {
        setIsOpen(false);
        setHasError(true);
        return;
      }

      setTime({ hh, mm, period });
      setTimeStr(newTimeStr);
      setValue(newValue);
      setHasError(false);
    }
  }, [defaultValue]);

  function handleClick(newTime) {
    const newTimeParsed = getExplodeTime(newTime);
    const { hh, mm, period, timeStr: newTimeStr, value: newValue } = newTimeParsed;

    onChange(newTimeParsed);

    setTime({ hh, mm, period });
    setTimeStr(newTimeStr);
    setValue(newValue);
    setHasError(false);
  }

  const handleChange = event => {
    setValue(event.target.value);

    if (!event.target.value) {
      setTime({ hh: null, mm: null, period: null });
      setHasError(false);
      return;
    }

    const newTimeParsed = getExplodeTime(event.target.value);
    const { hh, mm, period, timeStr: newTimeStr, error } = newTimeParsed;
    onChange(newTimeParsed);

    if (error) {
      setHasError(true);
      setIsOpen(false);
      return;
    }

    setTime({ hh, mm, period });
    setTimeStr(newTimeStr);
    setHasError(false);
  };

  const handleFocus = () => {
    if (!isDisabled) {
      setIsTabIndexActive(-1);
      setIsOpen(true);
    }
  };

  const handleBlur = event => {
    const timeinputDom = document.querySelector(".timeinput-picker");

    let target = event.relatedTarget;
    if (target === null) {
      // IE11 fix https://stackoverflow.com/a/49325196/196038
      target = document.activeElement;
    }

    if (timeinputDom && timeinputDom.contains(target)) {
      return;
    }

    setIsTabIndexActive(0);
    setIsOpen(false);
  };

  function finish() {
    setIsOpen(false);
    setValue(timeStr);
  }

  const handleKeyUp = event => {
    if (event.key === "Enter") {
      finish();
    }

    if (event.key === "Escape") {
      finish();
    }
  };

  return (
    <L10n>
      <sc.TimePicker onFocus={handleFocus} onBlur={handleBlur}>
        <Popover style={{ width: "100%" }} isOpen={isOpen} edge="left" offset={0} align="bottom">
          {/* <div className="timeinput" onFocus={handleFocus} onBlur={handleBlur}> */}
          {/* eslint-disable-next-line */}
          <div tabIndex={isTabIndexActive ? 0 : -1}>
            {/* setting hasClearButton to false confuses, look like a close button for the timeinput hasClearButton */}
            <FormElement isLabelVisuallyHidden>
              <FormElement.Content style={{ margin: 0 }}>
                <Popover.Trigger style={{ width: "100%" }}>
                  <Input
                    ariaLabel={a11yText}
                    hasClearButton={false}
                    isDisabled={isDisabled}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    onFocus={handleFocus}
                    value={value}
                    data-qa-id="time-input__starting-at"
                    {...moreProps}
                  />
                </Popover.Trigger>
              </FormElement.Content>
              <FormElement.Error>{hasError ? labelError : null}</FormElement.Error>
            </FormElement>
          </div>
          <Popover.Content>
            <Picker
              hh={time.hh}
              isVisible={isOpen}
              labelCustom={labelCustom}
              labelHours={labelHours}
              labelMinutes={labelMinutes}
              labelPeriod={labelPeriod}
              labelAM={labelAM}
              labelPM={labelPM}
              mm={time.mm}
              onClick={handleClick}
              period={time.period}
              {...moreProps}
            />
          </Popover.Content>
          {/* </div> */}
        </Popover>
      </sc.TimePicker>
    </L10n>
  );
}

TimePicker.displayName = "TimePicker";
TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
