import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import CheckIcon from "@paprika/icon/lib/Check";
import DashIcon from "@paprika/icon/lib/Dash";
import checkboxStyles from "./Checkbox.styles";

const checkboxStates = {
  CHECKED: "checked",
  UNCHECKED: "unchecked",
  INDETERMINATE: "indeterminate",
};

const propTypes = {
  a11yText: PropTypes.string,
  checkedState: PropTypes.oneOf(Object.values(checkboxStates)),
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  checkedState: checkboxStates.UNCHECKED,
  children: null,
  isDisabled: false,
  size: ShirtSizes.MEDIUM,
};

const Checkbox = props => {
  const { a11yText, children, isDisabled, checkedState, size, onChange, ...moreProps } = props;
  const { CHECKED, INDETERMINATE } = checkboxStates;

  const checkboxId = React.useRef(uuid()).current;
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
    <div data-pka-anchor="checkbox" css={checkboxStyles} {...styleProps} {...moreProps}>
      <input
        checked={checkedState === CHECKED}
        disabled={isDisabled}
        id={checkboxId}
        ref={inputRef}
        type="checkbox"
        onChange={onChange}
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

Checkbox.states = checkboxStates;

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
export default Checkbox;
