import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Spinner.styles";

const spinnerSize = {
  large: "spinner--large",
  medium: "spinner--medium",
  small: "spinner--small",
};

const Spinner = ({ a11yText, className, caption, isDark, size, ...moreProps }) => {
  const rootClasses = classNames(className, spinnerSize[size]);

  const bestAria = a11yText || caption || "Loading"; // TODO: l10n

  return (
    <sc.Spinner className={rootClasses} {...moreProps} data-pka-anchor="spinner" isDark={isDark}>
      <div className="spinner__visual" />
      <div className="spinner__caption">{caption}</div>
      <div className="spinner__aria-alert" role="alert" aria-live="polite">
        {bestAria}
      </div>
    </sc.Spinner>
  );
};

Spinner.types = {
  size: constants.defaultSize,
};

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,

  /** Sets the className for the spinner */
  className: PropTypes.string,

  /** Sets the caption that will display beneath the spinner */
  caption: PropTypes.string,

  /** If the background is dark, different color of spinner will be rendered */
  isDark: PropTypes.bool,

  /** Sets the size of the spinner */
  size: PropTypes.oneOf([Spinner.types.size.SMALL, Spinner.types.size.MEDIUM, Spinner.types.size.LARGE]),
};

const defaultProps = {
  a11yText: null,
  className: null,
  caption: null,
  isDark: false,
  size: Spinner.types.size.MEDIUM
};

Spinner.displayName = "Spinner";
Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
