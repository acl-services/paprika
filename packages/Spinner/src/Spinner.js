import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import SpinnerStyles from "./Spinner.styles";

const propTypes = {
  a11yText: PropTypes.string,
  className: PropTypes.string,
  caption: PropTypes.string,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  className: null,
  caption: null,
  size: ShirtSizes.MEDIUM,
};

const spinnerSize = {
  large: "spinner--large",
  medium: "spinner--medium",
  small: "spinner--small",
};

const Spinner = ({ a11yText, className, caption, size, ...moreProps }) => {
  const rootClasses = classNames(className, spinnerSize[size]);

  const bestAria = a11yText || caption || "Loading"; // TODO: l10n

  return (
    <div className={rootClasses} css={SpinnerStyles} {...moreProps} data-pka-anchor="spinner">
      <div className="spinner__visual" />
      <div className="spinner__caption">{caption}</div>
      <div className="spinner__aria-alert" role="alert" aria-live="polite">
        {bestAria}
      </div>
    </div>
  );
};

Spinner.displayName = "Spinner";
Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
