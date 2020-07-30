/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";

const propTypes = {
  hh: PropTypes.number,
  isVisible: PropTypes.bool,
  labelCustom: PropTypes.string,
  labelHours: PropTypes.string,
  labelMinutes: PropTypes.string,
  labelPeriod: PropTypes.string,
  labelAM: PropTypes.string,
  labelPM: PropTypes.string,
  mm: PropTypes.number,
  onClick: PropTypes.func,
  period: PropTypes.string,
};

export default class Picker extends React.Component {
  isMinutesActive = item => {
    if (this.props.mm > 59) return false;
    const { mm } = this.props;
    if (item === "00" && mm === 0) return true;

    if (item === mm) return true;

    if (mm !== 0 && mm !== 15 && mm !== 30 && mm !== 45 && !Number.isNaN(parseInt(mm, 10)) && item === "custom")
      return true;

    return false;
  };

  handleClickHour = hh => () => {
    const { mm, period } = this.props;
    const timeStr = `${hh}:${mm || "00"}${period || "am"}`;

    this.props.onClick(timeStr);
  };

  handleClickMinutes = mm => () => {
    if (["00", 15, 30, 45].some(minutes => minutes === mm)) {
      const { hh, period } = this.props;
      const timeStr = `${hh || "1"}:${mm}${period || "am"}`;

      this.props.onClick(timeStr);
    }
  };

  handleClickPeriod = period => () => {
    const { hh, mm } = this.props;
    const timeStr = `${hh || "1"}:${mm || "00"}${period}`;

    this.props.onClick(timeStr);
  };

  handlePreventMouseDown = event => {
    /* IE11 specific issue https://stackoverflow.com/a/48833360/196038 */
    /* onclick and onBlur dont work well together on ie11, this allowed the button */
    /* behave as onclick event, preventing to propagate the event on mouse down and only */
    /* make work on mouse up */
    event.preventDefault();
  };

  render() {
    const { hh, period, isVisible } = this.props;
    if (!isVisible) {
      return null;
    }

    const isActive = "timeinput-picker__column-item--is-picked";

    return (
      <div className="timeinput-picker">
        <div className="timeinput-picker__hours timeinput-picker__option">
          <div className="timeinput-picker__title">{this.props.labelHours}</div>
          <div className="timeinput-picker__columns">
            <div className="timeinput-picker__column">
              {[1, 2, 3, 4, 5, 6].map(item => (
                <RawButton
                  tabIndex={-1}
                  key={`hours_colum1_${item}`}
                  onMouseDown={this.handlePreventMouseDown}
                  onMouseUp={this.handleClickHour(item, this)}
                  className={`timeinput-picker__column-item ${item === hh ? isActive : ""}`}
                >
                  {item}
                </RawButton>
              ))}
            </div>
            <div className="timeinput-picker__column">
              {[7, 8, 9, 10, 11, 12].map(item => (
                <RawButton
                  tabIndex={-1}
                  key={`hours_colum2_${item}`}
                  onMouseDown={this.handlePreventMouseDown}
                  onMouseUp={this.handleClickHour(item, this)}
                  className={`timeinput-picker__column-item ${item === hh ? isActive : ""}`}
                >
                  {item}
                </RawButton>
              ))}
            </div>
          </div>
        </div>
        <div className="timeinput-picker__minutes timeinput-picker__option">
          <div className="timeinput-picker__title">{this.props.labelMinutes}</div>
          <div className="timeinput-picker__columns">
            <div className="timeinput-picker__column">
              {["00", 15, 30, 45, "custom"].map(item => (
                <RawButton
                  tabIndex={-1}
                  key={`minutes_${item}`}
                  isDisabled={item === "custom"}
                  onMouseDown={this.handlePreventMouseDown}
                  onMouseUp={this.handleClickMinutes(item, this)}
                  className={`timeinput-picker__column-item 
                  ${item === "custom" ? "timeinput-picker__column-item__custom" : ""} 
                  ${this.isMinutesActive(item) ? "timeinput-picker__column-item--is-picked" : ""}`}
                >
                  {item === "custom" ? this.props.labelCustom : item}
                </RawButton>
              ))}
            </div>
          </div>
        </div>
        <div className="timeinput-picker__period timeinput-picker__option">
          <div className="timeinput-picker__title">{this.props.labelPeriod}</div>
          <div className="timeinput-picker__columns">
            <div className="timeinput-picker__column">
              {[this.props.labelAM, this.props.labelPM].map(item => (
                <RawButton
                  tabIndex={-1}
                  key={`period_${item}`}
                  onMouseDown={this.handlePreventMouseDown}
                  onMouseUp={this.handleClickPeriod(item, this)}
                  className={`timeinput-picker__column-item ${item === period ? isActive : ""}`}
                >
                  {item}
                </RawButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Picker.propTypes = propTypes;
