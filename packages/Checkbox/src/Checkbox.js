import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import { checkboxStyles, labelStyles } from "./Checkbox.styles";

const checkboxId = `checkbox-id-${uuid()}`;

const propTypes = {
  a11yText: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  className: null,
  isChecked: false,
  isDisabled: false,
  size: "medium",
};

const Checkbox = props => {
  const { a11yText, className, isChecked, isDisabled, size, ...moreProps } = props;

  const styleProps = {
    size,
  };

  if (a11yText) moreProps["aria-label"] = a11yText;

  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <div className={className} css={checkboxStyles} {...styleProps}>
      <input type="checkbox" id={checkboxId} checked={isChecked} disabled={isDisabled} {...moreProps} />
      <label css={labelStyles} htmlFor={checkboxId}>
        Check out this checkbox component
      </label>
    </div>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
};

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
