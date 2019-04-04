/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ShirtSizes } from "../helpers/customPropTypes";
import SpinnerStyles from "./Spinner.styles";

const propTypes = {
  ariaText: PropTypes.string,
  className: PropTypes.string,
  caption: PropTypes.string,

  /** customPropTypes shirtSize */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  ariaText: null,
  className: null,
  caption: null,
  size: "medium",
};

const spinnerSize = {
  large: "spinner--large",
  medium: "spinner--medium",
  small: "spinner--small",

  // deprecated values
  default: "spinner--medium",
  tiny: "spinner--small",
};

const Spinner = ({ ariaText, className, caption, size, ...moreProps }) => {
  const rootClasses = classNames("spinner", className, spinnerSize[size]);

  const bestAria = () => ariaText || caption || "Loading"; // TODO: l10n

  return (
    <div className={rootClasses} data-qa-anchor="spinner" {...moreProps} css={SpinnerStyles}>
      <div className="spinner__visual" />
      <div className="spinner__caption">{caption}</div>
      <div className="spinner__aria-alert" role="alert" aria-live="polite">
        {bestAria()}
      </div>
    </div>
  );
};

Spinner.displayName = "Spinner";
Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
