import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import CheckIcon from "@paprika/icon/lib/Check";
import AddIcon from "@paprika/icon/lib/Add";
import checkboxStyles from "./Checkbox.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  children: null,
  isChecked: false,
  isDisabled: false,
  isIndeterminate: false,
  size: ShirtSizes.MEDIUM,
};

const Checkbox = props => {
  const checkboxId = React.useRef(uuid());
  const inputRef = React.useRef(null);

  const { a11yText, children, isChecked, isDisabled, isIndeterminate, size, ...moreProps } = props;

  const styleProps = {
    hasChildren: !!children,
    size,
  };

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = isIndeterminate;
  }, [isIndeterminate]);

  const inputProps = {};
  if (a11yText) inputProps["aria-label"] = a11yText;

  return (
    <div data-pka-anchor="checkbox" css={checkboxStyles} {...styleProps} {...moreProps}>
      <input
        type="checkbox"
        id={checkboxId.current}
        checked={isChecked}
        disabled={isDisabled}
        ref={inputRef}
        {...inputProps}
      />
      <label htmlFor={checkboxId.current}>
        {children}
        <CheckIcon className="checkbox-icon" aria-hidden data-pka-anchor="checkbox.icon.check" />
        <AddIcon aria-hidden className="checkbox-icon" data-pka-anchor="checkbox.icon.indeterminate" />
      </label>
    </div>
  );
};

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
