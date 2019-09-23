/* eslint-disable jsx-a11y/label-has-associated-control */

import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import CheckIcon from "@paprika/icon/lib/Check";

import { checkboxStyles, labelStyles } from "./Checkbox.styles";

const propTypes = {
  a11yText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  isChecked: false,
  isDisabled: false,
  size: "medium",
};

const Checkbox = props => {
  const checkboxId = React.useRef(uuid()).current;

  const { a11yText, isChecked, isDisabled, size, ...moreProps } = props;

  const styleProps = {
    size,
  };

  if (a11yText) moreProps["aria-label"] = a11yText;

  return (
    <div data-pka-anchor="checkbox" css={checkboxStyles} {...styleProps}>
      <input type="checkbox" id={checkboxId} checked={isChecked} disabled={isDisabled} {...moreProps} />
      <label css={labelStyles} htmlFor={checkboxId}>
        Check out this checkbox component
      </label>
      <CheckIcon aria-hidden data-pka-anchor="checkbox.icon" />
    </div>
  );
};

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
