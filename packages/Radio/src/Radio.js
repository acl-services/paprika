import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import CheckIcon from "@paprika/icon/lib/Check";
import { extractChildrenProps } from "@paprika/helpers";
import * as sc from "./Radio.styles";
import Group from "./components/Group";
import RadioInputPropsCollector from "./RadioInputPropsCollector";
import types from "./types";

const noop = () => {};

function Radio(props) {
  const {
    a11yText,
    children,
    isChecked,
    isUnchecked,
    isDisabled,
    name,
    canDeselect,
    onClick,
    size,
    tabIndex,
    value,
    ...moreProps
  } = props;
  const [radioId] = React.useState(() => `radio_${uuidv4()}`);
  const inputRef = React.useRef(null);
  const extendedInputProps = extractChildrenProps(children, RadioInputPropsCollector);

  const handleKeyDown = event => {
    if (
      // Prevent scrolling the page with a spacerbar keypress
      event.key === " " ||
      // Prevent submitting forms in IE/Edge with and enter keypress
      event.key === "Enter"
    ) {
      event.preventDefault();
    }
  };

  const handleKeyUp = event => {
    const isTriggerKey = event.key === " "; // space key
    if (!isDisabled && isTriggerKey) {
      onClick();
    }
  };

  const styleProps = {
    hasLabel: !!children,
    size,
  };

  const inputProps = {
    onClick,
    checked: isChecked,
    disabled: isDisabled,
    name,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: inputRef,
    tabIndex,
    type: "radio",
    value,
    ...extendedInputProps,
    id: radioId,
  };
  if (a11yText) inputProps["aria-label"] = a11yText;

  return (
    <sc.Radio data-pka-anchor="radio" {...styleProps} {...moreProps}>
      <input {...inputProps} onChange={noop} />
      {/* eslint-disable */}
      <label onKeyUp={handleKeyUp} className={canDeselect ? "deselectable" : ""} htmlFor={radioId}>
        {/* eslint-enable */}
        {children}

        {canDeselect ? (
          <CheckIcon className="radio-icon" aria-hidden data-pka-anchor="radio.icon.check" />
        ) : (
          <div className="radio-icon radio-solid-background" data-pka-anchor="radio.icon.check" />
        )}
      </label>
    </sc.Radio>
  );
}

Radio.types = types;

const propTypes = {
  /** Used for aria-label on the radio input  */
  a11yText: PropTypes.string,
  /** Describe if the radio started as selected or not */
  canDeselect: PropTypes.bool,
  /** Used for label contents */
  children: PropTypes.node,
  /* Controls if the radio is checked or not, never combine it with defaultIsChecked */
  isChecked: PropTypes.bool,
  /** Describe if the radio is disabled or not */
  isDisabled: PropTypes.bool,
  /** Describe if the radio started as checked or not */
  defaultIsChecked: PropTypes.bool,
  /** Name provided for accessibility */
  name: PropTypes.string,
  /** Allows to control checkable state from custom logic */
  isUnchecked: PropTypes.bool,
  /** onClick provided by parent Group component */
  onClick: () => {},
  /** Size provided by parent Group component */
  size: PropTypes.oneOf([Radio.types.size.SMALL, Radio.types.size.MEDIUM, Radio.types.size.LARGE]),
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Value applied to the input if needed. */
  value: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  canDeselect: false,
  children: null,
  defaultIsChecked: false,
  isChecked: false,
  isDisabled: false,
  name: "",
  isUnchecked: false,
  onClick: () => {},
  size: Radio.types.size.MEDIUM,
  tabIndex: 0,
  value: "",
};

Radio.displayName = "Radio";
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.Group = Group;

Radio.Input = RadioInputPropsCollector;

export default Radio;
