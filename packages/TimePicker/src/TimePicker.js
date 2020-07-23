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
import Input from "@paprika/input";
import Picker from "./Picker/Picker";
import TimeInterpreter from "./TimeInterpreter";

import * as scPicker from "./Picker/Picker.styles"; // eslint-disable-line
import * as sc from "./TimePicker.styles";

const getExplodeTime = TimeInterpreter.parse;

export default class TimeInput extends React.Component {
  $refInputContainer = React.createRef();

  static propTypes = {
    ariaLabel: PropTypes.string,
    defaultIsVisible: PropTypes.bool,
    defaultValue: PropTypes.string, // it been use on getDerivedStateFromProps which is a useEffect in pre-era of hooks
    isDisabled: PropTypes.bool,
    labelAM: PropTypes.string,
    labelCustom: PropTypes.string,
    labelError: PropTypes.string,
    labelHours: PropTypes.string,
    labelMinutes: PropTypes.string,
    labelPeriod: PropTypes.string,
    labelPM: PropTypes.string,
    onChange: PropTypes.func,
    prefix: PropTypes.string,
  };

  static defaultProps = {
    ariaLabel: "Time (hh:mm)",
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

  constructor(props) {
    super(props);
    this.name = `${props.prefix}${btoa(Math.random()).substring(0, 8)}`;
    this.state = {
      hh: null,
      isPristine: true,
      isVisible: this.props.defaultIsVisible,
      mm: null,
      period: null,
      timeStr: null,
      isTabIndexActive: 0,
      value: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.defaultValue && !state.value && state.isPristine) {
      const time = getExplodeTime(props.defaultValue);

      if (time.error) {
        return {
          ...time,
          error: props.labelError,
          isVisible: false,
          isPristine: false,
        };
      }
      return { ...time, isVisible: props.defaultIsVisible, isPristine: false };
    }

    return null;
  }

  setTime(time) {
    const timeObj = getExplodeTime(time);
    this.props.onChange(timeObj);
    return timeObj;
  }

  value = () => this.state;

  handleClick = time => {
    this.setState(this.setTime(time));
  };

  handleChange = event => {
    const time = this.setTime(event.target.value);
    if (time.error) {
      this.handleError(time);
      return;
    }

    this.setState(time);
  };

  handleFocus = () => {
    if (!this.props.isDisabled) {
      this.setState(
        {
          isTabIndexActive: -1,
          isVisible: true,
        },
        () => {
          this.$refInputContainer.current.querySelector("input").focus();
        }
      );
    }
  };

  handleBlur = event => {
    const timeinputDom = document.querySelector(".timeinput-picker");

    let target = event.relatedTarget;
    if (target === null) {
      // IE11 fix https://stackoverflow.com/a/49325196/196038
      target = document.activeElement;
    }

    if (timeinputDom && timeinputDom.contains(target)) {
      return;
    }

    this.setState({
      isTabIndexActive: 0,
      isVisible: false,
    });
  };

  handleClickOutside = () => {
    this.finish();
  };

  handleKeyUp = event => {
    if (event.key === "Enter") {
      this.finish();
    }

    if (event.key === "Escape") {
      this.finish();
    }
  };

  handleError(time) {
    this.setState({
      ...time,
      error: this.props.labelError,
      isVisible: false,
    });
  }

  finish() {
    this.setState(state => ({
      isVisible: false,
      value: state.timeStr,
    }));
  }

  render() {
    const {
      isDisabled,
      ariaLabel,
      labelCustom,
      labelHours,
      labelMinutes,
      labelPeriod,
      labelAM,
      labelPM,
      ...moreProps
    } = this.props;

    return (
      <sc.CSSHolder>
        <scPicker.CSSHolder>
          <div className="timeinput" onFocus={this.handleFocus} onBlur={this.handleBlur}>
            {/* eslint-disable-next-line */}
            <div tabIndex={this.state.isTabIndexActive ? 0 : -1}>
              {/* setting hasClearButton to false confuses, look like a close button for the timeinput hasClearButton */}
              <div ref={this.$refInputContainer}>
                <Input
                  ariaLabel={ariaLabel}
                  hasClearButton={false}
                  isDisabled={isDisabled}
                  onInput={this.handleChange}
                  onFocus={this.handleFocus}
                  onKeyUp={this.handleKeyUp}
                  value={this.state.value}
                  data-qa-id="time-input__starting-at"
                  {...moreProps}
                />
              </div>
              {/** THIS ERROR SHOULD BE REPLACE WITH A PROPER FORM-ELEMENT */}
              <span>{this.state.error}</span>
              <Picker
                hh={this.state.hh}
                isVisible={this.state.isVisible}
                labelCustom={labelCustom}
                labelHours={labelHours}
                labelMinutes={labelMinutes}
                labelPeriod={labelPeriod}
                labelAM={labelAM}
                labelPM={labelPM}
                mm={this.state.mm}
                onClick={this.handleClick}
                period={this.state.period}
                {...moreProps}
              />
            </div>
          </div>
        </scPicker.CSSHolder>
      </sc.CSSHolder>
    );
  }
}
