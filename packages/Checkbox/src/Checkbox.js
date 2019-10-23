import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import CheckIcon from "@paprika/icon/lib/Check";
import DashIcon from "@paprika/icon/lib/Dash";
import checkboxStyles from "./Checkbox.styles";

export const checkboxStates = {
  CHECKED: "checked",
  UNCHECKED: "unchecked",
  INDETERMINATE: "indeterminate",
};

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  checkedState: PropTypes.oneOf(Object.values(checkboxStates)),
};

const defaultProps = {
  a11yText: null,
  children: null,
  isDisabled: false,
  size: ShirtSizes.MEDIUM,
  checkedState: checkboxStates.UNCHECKED,
};

const Checkbox = props => {
  const checkboxId = React.useRef(uuid()).current;
  const inputRef = React.useRef(null);

  const { a11yText, children, isDisabled, checkedState, size, ...moreProps } = props;

  const styleProps = {
    hasChildren: !!children,
    size,
  };

  React.useEffect(() => {
    if (inputRef.current && checkedState === checkboxStates.INDETERMINATE) {
      inputRef.current.indeterminate = checkboxStates.INDETERMINATE;
    }
  }, [checkedState]);

  const inputProps = {};
  if (a11yText) inputProps["aria-label"] = a11yText;

  return (
    <div data-pka-anchor="checkbox" css={checkboxStyles} {...styleProps} {...moreProps}>
      <input
        type="checkbox"
        id={checkboxId}
        checked={checkedState === checkboxStates.CHECKED}
        disabled={isDisabled}
        ref={inputRef}
        {...inputProps}
      />
      <label htmlFor={checkboxId}>
        {children}
        <CheckIcon className="checkbox-icon" aria-hidden data-pka-anchor="checkbox.icon.check" />
        <DashIcon aria-hidden className="checkbox-icon" data-pka-anchor="checkbox.icon.indeterminate" />
      </label>
    </div>
  );
};

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
