import React from "react";
import PropTypes from "prop-types";
import ClockIcon from "@paprika/icon/lib/Clock";
import Input from "@paprika/input";
import useI18n from "@paprika/l10n/lib/useI18n";
import Popover from "@paprika/popover";
import Picker from "./components/Picker/Picker";
import TimeInterpreter from "./TimeInterpreter";
import * as sc from "./TimePicker.styles";

const getExplodeTime = TimeInterpreter.parse;

const propTypes = {
  /** Descriptive a11y text for assistive technologies. */
  a11yText: PropTypes.string,

  /** If the TimePicker is set to visible. */
  defaultIsOpen: PropTypes.bool,

  /** Sets the default value for the TimePicker */
  defaultValue: PropTypes.string,

  /** If the TimePicker is disabled. */
  isDisabled: PropTypes.bool,

  /** Should be read-only or not, default is false. */
  isReadOnly: PropTypes.bool,

  /** Callback to be executed when the value is changed. */
  onChange: PropTypes.func,

  /** Callback to be executed when there is an error. */
  onError: PropTypes.func,
};

const defaultProps = {
  a11yText: "Time (hh:mm)",
  defaultIsOpen: false,
  defaultValue: null,
  isDisabled: false,
  isReadOnly: false,
  onChange: () => {},
  onError: () => {},
};

function TimePicker(props) {
  const { a11yText, defaultIsOpen, defaultValue, isDisabled, isReadOnly, onChange, onError, ...moreProps } = props;

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
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    if (defaultValue) {
      const { hh, mm, period, error, timeStr: newTimeStr, value: newValue } = getExplodeTime(defaultValue);

      if (error) {
        setIsOpen(false);
        console.error("TimePicker - invalid defaultValue, please check your defaultValue passed in");
        return;
      }

      setTime({ hh, mm, period });
      setTimeStr(newTimeStr);
      setValue(newValue);
    }
  }, [defaultValue]);

  function handleClick(newTime) {
    const newTimeParsed = getExplodeTime(newTime);
    const { hh, mm, period, timeStr: newTimeStr, value: newValue } = newTimeParsed;

    onChange(newTimeParsed);

    setTime({ hh, mm, period });
    setTimeStr(newTimeStr);
    setValue(newValue);
  }

  const handleChange = event => {
    setValue(event.target.value);

    if (!event.target.value) {
      setTime({ hh: null, mm: null, period: null });
      return;
    }

    const newTimeParsed = getExplodeTime(event.target.value);
    const { hh, mm, period, timeStr: newTimeStr, error } = newTimeParsed;
    onChange(newTimeParsed);

    if (error) {
      setIsOpen(false);
      onError(error);
      return;
    }

    setTime({ hh, mm, period });
    setTimeStr(newTimeStr);
  };

  const handleFocus = () => {
    if (!isDisabled && !isReadOnly) {
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

  const { t } = useI18n();

  return (
    <sc.TimePicker onFocus={handleFocus} onBlur={handleBlur}>
      <Popover style={{ width: "100%" }} isOpen={isOpen} edge="left" offset={0} align="bottom" shouldKeepFocus>
        <Popover.Trigger style={{ width: "100%" }}>
          <Input
            aria-label={a11yText}
            hasClearButton={false}
            icon={<ClockIcon />}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            onFocus={handleFocus}
            value={value}
            data-pka-anchor="timePicker-Input"
            {...moreProps}
          />
        </Popover.Trigger>
        <Popover.Content>
          <Picker
            hh={time.hh}
            isOpen={isOpen}
            labelCustom={t("timePicker.custom")}
            labelHours={t("timePicker.hours")}
            labelMinutes={t("timePicker.minutes")}
            labelPeriod={t("timePicker.period")}
            labelAM={t("timePicker.am")}
            labelPM={t("timePicker.pm")}
            mm={time.mm}
            onClick={handleClick}
            period={time.period}
            {...moreProps}
          />
        </Popover.Content>
      </Popover>
    </sc.TimePicker>
  );
}

TimePicker.displayName = "TimePicker";
TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
