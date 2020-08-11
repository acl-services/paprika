/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Picker.styles";

const propTypes = {
  /** Value for the hours */
  hh: PropTypes.number,

  /** If the Picker is visible. */
  isOpen: PropTypes.bool,

  /** Label for the Custom button */
  labelCustom: PropTypes.string,

  /** Label for the Hours column */
  labelHours: PropTypes.string,

  /** Label for the Minutes column */
  labelMinutes: PropTypes.string,

  /** Label for the Period column */
  labelPeriod: PropTypes.string,

  /** Label for the am */
  labelAM: PropTypes.string,

  /** Label for the pm */
  labelPM: PropTypes.string,

  /** Value for the minutes */
  mm: PropTypes.number,

  /** Callback to be executed when the value is changed. */
  onClick: PropTypes.func,

  /** Value for period */
  period: PropTypes.string,
};

function Picker(props) {
  const {
    hh,
    isOpen,
    labelCustom,
    labelHours,
    labelMinutes,
    labelPeriod,
    labelAM,
    labelPM,
    mm,
    onClick,
    period,
  } = props;

  const isMinutesActive = item => {
    if (mm > 59) return false;
    if (item === "00" && mm === 0) return true;

    if (item === mm) return true;

    if (mm !== 0 && mm !== 15 && mm !== 30 && mm !== 45 && !Number.isNaN(parseInt(mm, 10)) && item === "custom")
      return true;

    return false;
  };

  const handleClickHour = hh => () => {
    const timeStr = `${hh}:${mm || "00"}${period || "am"}`;
    onClick(timeStr);
  };

  const handleClickMinutes = mm => () => {
    if (["00", 15, 30, 45].some(minutes => minutes === mm)) {
      const timeStr = `${hh || "1"}:${mm}${period || "am"}`;

      onClick(timeStr);
    }
  };

  const handleClickPeriod = period => () => {
    const timeStr = `${hh || "1"}:${mm || "00"}${period}`;

    onClick(timeStr);
  };

  const handlePreventMouseDown = event => {
    /* IE11 specific issue https://stackoverflow.com/a/48833360/196038 */
    /* onclick and onBlur dont work well together on ie11, this allowed the button */
    /* behave as onclick event, preventing to propagate the event on mouse down and only */
    /* make work on mouse up */
    event.preventDefault();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <sc.Picker>
      <sc.timeInputPickerOption>
        <sc.timeInputPickerTitle>{labelHours}</sc.timeInputPickerTitle>
        <sc.timeInputPickerColumns>
          <sc.timeInputPickerColumn>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <sc.timeInputPickerColumnItem
                tabIndex={-1}
                key={`hours_colum1_${item}`}
                onMouseDown={handlePreventMouseDown}
                onMouseUp={handleClickHour(item)}
                isActive={item === hh}
              >
                {item}
              </sc.timeInputPickerColumnItem>
            ))}
          </sc.timeInputPickerColumn>
          <sc.timeInputPickerColumn>
            {[7, 8, 9, 10, 11, 12].map(item => (
              <sc.timeInputPickerColumnItem
                tabIndex={-1}
                key={`hours_colum2_${item}`}
                onMouseDown={handlePreventMouseDown}
                onMouseUp={handleClickHour(item)}
                isActive={item === hh}
              >
                {item}
              </sc.timeInputPickerColumnItem>
            ))}
          </sc.timeInputPickerColumn>
        </sc.timeInputPickerColumns>
      </sc.timeInputPickerOption>
      <sc.timeInputPickerOption>
        <sc.timeInputPickerTitle>{labelMinutes}</sc.timeInputPickerTitle>
        <sc.timeInputPickerColumns>
          <sc.timeInputPickerColumn>
            {["00", 15, 30, 45, "custom"].map(item => (
              <sc.timeInputPickerColumnItem
                tabIndex={-1}
                key={`minutes_${item}`}
                isDisabled={item === "custom"}
                onMouseDown={handlePreventMouseDown}
                onMouseUp={handleClickMinutes(item)}
                isCustom={item === "custom"}
                isActive={isMinutesActive(item)}
              >
                {item === "custom" ? labelCustom : item}
              </sc.timeInputPickerColumnItem>
            ))}
          </sc.timeInputPickerColumn>
        </sc.timeInputPickerColumns>
      </sc.timeInputPickerOption>
      <sc.timeInputPickerOption>
        <sc.timeInputPickerTitle>{labelPeriod}</sc.timeInputPickerTitle>
        <sc.timeInputPickerColumns>
          <sc.timeInputPickerColumn>
            {[labelAM, labelPM].map(item => (
              <sc.timeInputPickerColumnItem
                tabIndex={-1}
                key={`period_${item}`}
                onMouseDown={handlePreventMouseDown}
                onMouseUp={handleClickPeriod(item)}
                isActive={item === period}
              >
                {item}
              </sc.timeInputPickerColumnItem>
            ))}
          </sc.timeInputPickerColumn>
        </sc.timeInputPickerColumns>
      </sc.timeInputPickerOption>
    </sc.Picker>
  );
}

Picker.propTypes = propTypes;

export default Picker;
