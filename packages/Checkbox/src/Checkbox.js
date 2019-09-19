import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import { checkboxStyles, labelStyles } from "./Checkbox.styles";

const propTypes = {
  a11yText: PropTypes.string,
  className: PropTypes.string,
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
  const { a11yText, className, isDisabled, size, ...moreProps } = props;

  const styleProps = {
    size,
  };

  if (a11yText) moreProps["aria-label"] = a11yText;

  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <div css={checkboxStyles} {...styleProps}>
      <label css={labelStyles} htmlFor="rando">
        Check this out
      </label>
      <input type="checkbox" id="rando" disabled={isDisabled} />
    </div>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
};

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
