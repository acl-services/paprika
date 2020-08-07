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
  defaultIsVisible: PropTypes.bool,

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
  defaultIsVisible: false,
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
    defaultIsVisible,
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

  const [hh, setHh] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(defaultIsVisible);
  const [mm, setMm] = React.useState(null);
  const [period, setPeriod] = React.useState(null);
  const [timeStr, setTimeStr] = React.useState(null);
  const [isTabIndexActive, setIsTabIndexActive] = React.useState(0);
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  // TODO: seems like we don't need it in functional component
  // function getDerivedStateFromProps() {
  //   if (defaultValue && !value && isPristine) {
  //     const time = getExplodeTime(defaultValue);

  //     if (time.error) {
  //       return {
  //         ...time,
  //         error: labelError,
  //         setIsVisible: false,
  //         setIsPristine: false,
  //       };
  //     }
  //     return { ...time, isVisible, isPristine: false };
  //   }

  //   return null;
  // }

  function setTime(time) {
    const timeObj = getExplodeTime(time);
    onChange(timeObj);
    return timeObj;
  }

  function handleClick(time) {
    const newTime = setTime(time);

    setHh(newTime.hh);
    setMm(newTime.mm);
    setPeriod(newTime.period);
    setTimeStr(newTime.timeStr);
    setValue(newTime.value);
    setError(null);
  }

  const handleError = () => {
    setError(labelError);
    setIsVisible(false);
  };

  const handleChange = event => {
    const time = setTime(event.target.value);
    if (time.error) {
      handleError(time);
      return;
    }

    setHh(time.hh);
    setMm(time.mm);
    setPeriod(time.period);
    setTimeStr(time.timeStr);
    setValue(time.value);
    setError(null);
  };

  const handleFocus = () => {
    if (!isDisabled) {
      setIsTabIndexActive(-1);
      setIsVisible(true);
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
    setIsVisible(false);
  };

  function finish() {
    setIsVisible(false);
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
      <sc.TimePicker>
        <Popover style={{ width: "100%" }}>
          <div className="timeinput" onFocus={handleFocus} onBlur={handleBlur}>
            {/* eslint-disable-next-line */}
            <div tabIndex={isTabIndexActive ? 0 : -1}>
              {/* setting hasClearButton to false confuses, look like a close button for the timeinput hasClearButton */}
              <FormElement>
                <FormElement.Content>
                  <Popover.Trigger style={{ width: "100%" }}>
                    <Input
                      ariaLabel={a11yText}
                      hasClearButton={false}
                      isDisabled={isDisabled}
                      onInput={handleChange}
                      onKeyUp={handleKeyUp}
                      onFocus={handleFocus}
                      defaultValue={value}
                      data-qa-id="time-input__starting-at"
                      {...moreProps}
                    />
                  </Popover.Trigger>
                </FormElement.Content>
                <FormElement.Error>{error}</FormElement.Error>
              </FormElement>
            </div>
            <Popover.Content>
              <Picker
                hh={hh}
                isVisible={isVisible}
                labelCustom={labelCustom}
                labelHours={labelHours}
                labelMinutes={labelMinutes}
                labelPeriod={labelPeriod}
                labelAM={labelAM}
                labelPM={labelPM}
                mm={mm}
                onClick={handleClick}
                period={period}
                {...moreProps}
              />
            </Popover.Content>
          </div>
        </Popover>
      </sc.TimePicker>
    </L10n>
  );
}

TimePicker.displayName = "TimePicker";
TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
