import React from "react";
import PropTypes from "prop-types";

import Heading from "@paprika/heading";
import * as sc from "./ProgressBar.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. */
  a11yText: PropTypes.string,
  /** Description for the ProgressBar */
  bodyText: PropTypes.string,
  /** Header text for the ProgressBar */
  header: PropTypes.string,
  /** Specifies how much progress has been completed from 0-100 */
  completed: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  bodyText: null,
  header: null,
  completed: 0,
};

function ProgressBar(props) {
  const { a11yText, header, bodyText, completed, ...moreProps } = props;
  const bestAria = a11yText || "Loading";
  return (
    <sc.ProgressBar {...moreProps}>
      <Heading level={3}>{header}</Heading>
      <sc.Bar>
        <sc.BarFiller
          data-pka-anchor="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={completed}
          completed={completed}
        />
      </sc.Bar>
      <sc.Body>{bodyText}</sc.Body>
      <sc.BarAria role="alert" aria-live="polite">
        {bestAria}
      </sc.BarAria>
    </sc.ProgressBar>
  );
}

ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
