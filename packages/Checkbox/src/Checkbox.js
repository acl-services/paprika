import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import CheckIcon from "@paprika/icon/lib/Check";
import checkboxStyles from "./Checkbox.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  children: null,
  isChecked: false,
  isDisabled: false,
  size: "medium",
};

const Checkbox = props => {
  const checkboxId = React.useRef(uuid()).current;

  const { a11yText, children, isChecked, isDisabled, size, ...moreProps } = props;

  const styleProps = {
    hasChildren: !!children,
    size,
  };

  const inputProps = {};
  if (a11yText) inputProps["aria-label"] = a11yText;

  return (
    <div data-pka-anchor="checkbox" css={checkboxStyles} {...styleProps} {...moreProps}>
      <input type="checkbox" id={checkboxId} checked={isChecked} disabled={isDisabled} {...inputProps} />
      <label htmlFor={checkboxId}>
        {children}
        <CheckIcon aria-hidden data-pka-anchor="checkbox.icon" />
      </label>
    </div>
  );
};

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
