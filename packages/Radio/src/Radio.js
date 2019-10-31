import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import CheckIcon from "@paprika/icon/lib/Check";
import DashIcon from "@paprika/icon/lib/Dash";
import radioStyles from "./Radio.styles";

export const radioStates = {
  CHECKED: "checked",
  UNCHECKED: "unchecked",
  INDETERMINATE: "indeterminate",
};

const propTypes = {
  a11yText: PropTypes.string,
  checkedState: PropTypes.oneOf(Object.values(radioStates)),
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  checkedState: radioStates.UNCHECKED,
  children: null,
  isDisabled: false,
  size: ShirtSizes.MEDIUM,
};

const Radio = props => {
  const { a11yText, children, isDisabled, checkedState, size, ...moreProps } = props;
  const { CHECKED, INDETERMINATE } = radioStates;

  const radioId = React.useRef(uuid()).current;
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (!inputRef.current) return;
    if (checkedState === INDETERMINATE) {
      inputRef.current.indeterminate = INDETERMINATE;
    } else {
      inputRef.current.indeterminate = false;
    }
  }, [checkedState]);

  const styleProps = {
    hasLabel: !!children,
    size,
  };

  const inputProps = {};
  if (a11yText) inputProps["aria-label"] = a11yText;

  return (
    <div data-pka-anchor="radio" css={radioStyles} {...styleProps} {...moreProps}>
      <input
        checked={checkedState === CHECKED}
        disabled={isDisabled}
        id={radioId}
        ref={inputRef}
        type="radio"
        {...inputProps}
      />
      <label htmlFor={radioId}>
        {children}
        <CheckIcon className="radio-icon" aria-hidden data-pka-anchor="radio.icon.check" />
        <DashIcon aria-hidden className="radio-icon" data-pka-anchor="radio.icon.indeterminate" />
      </label>
    </div>
  );
};

Radio.displayName = "radio";
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
