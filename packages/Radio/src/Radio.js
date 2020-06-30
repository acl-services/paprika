import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import CheckIcon from "@paprika/icon/lib/Check";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import radioStyles from "./Radio.styles";
import Group from "./components/Group";

const propTypes = {
  /** Used for aria-label on the radio input  */
  a11yText: PropTypes.string,
  /** Used for aria-describedby on the radio input  */
  ariaDescribedBy: PropTypes.string,
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
  /** onClick provided by parent Group component */
  onClick: () => {},
  /** Size provided by parent Group component */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Value applied to the input if needed. */
  value: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  ariaDescribedBy: null,
  canDeselect: false,
  children: null,
  defaultIsChecked: false,
  isChecked: false,
  isDisabled: false,
  name: "",
  onClick: () => {},
  size: ShirtSizes.MEDIUM,
  tabIndex: 0,
  value: "",
};

function Radio(props) {
  const {
    a11yText,
    ariaDescribedBy,
    children,
    isChecked,
    isDisabled,
    name,
    canDeselect,
    onClick,
    size,
    tabIndex,
    value,
    ...moreProps
  } = props;
  const radioId = React.useRef(nanoid()).current;
  const inputRef = React.useRef(null);

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
    "aria-describedby": ariaDescribedBy,
    onClick,
    checked: isChecked,
    disabled: isDisabled,
    id: radioId,
    name,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: inputRef,
    tabIndex,
    type: "radio",
    value,
  };
  if (a11yText) inputProps["aria-label"] = a11yText;

  return (
    <div data-pka-anchor="radio" css={radioStyles} {...styleProps} {...moreProps}>
      <input {...inputProps} />
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
    </div>
  );
}

Radio.displayName = "Radio";
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.Group = Group;

export default Radio;
