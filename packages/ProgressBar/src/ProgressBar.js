import React from "react";
import PropTypes from "prop-types";

import Heading from "@paprika/heading";
import * as sc from "./ProgressBar.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. */
  a11yText: PropTypes.string,

  /** Description for the ProgressBar */
  bodyText: PropTypes.string,

  /** Specifies how much progress has been completed from 0-100 */
  completed: PropTypes.number,

  /** Header text for the ProgressBar */
  header: PropTypes.string,

  /** If ProgressBar is displayed in a compact style */
  isCompact: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  bodyText: null,
  completed: 0,
  header: null,
  isCompact: false,
};

function ProgressBar(props) {
  const { a11yText, bodyText, completed, header, isCompact, ...moreProps } = props;

  return (
    <sc.ProgressBar {...moreProps}>
      {header ? <Heading level={3}>{header}</Heading> : null}
      <sc.Bar isCompact={isCompact}>
        <sc.BarFiller
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={completed}
          completed={completed}
          data-pka-anchor="progress-bar"
          role="progressbar"
        />
      </sc.Bar>
      {bodyText ? <sc.Body>{bodyText}</sc.Body> : null}
      {a11yText ? <sc.A11yText aria-live="polite">{a11yText}</sc.A11yText> : null}
    </sc.ProgressBar>
  );
}

ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
