import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "@paprika/icon/lib/Check";
import * as sc from "./Indicator.styles";

const propTypes = {
  /** If this is the current or pending item in the list. */
  isActive: PropTypes.bool,

  /** If this item is complete. */
  isComplete: PropTypes.bool,

  /** If this is the last item in the list. */
  isLast: PropTypes.bool,
};

const defaultProps = {
  isActive: false,
  isComplete: false,
  isLast: false,
};

const Indicator = props => {
  const { isComplete, isActive } = props;

  return (
    <sc.Indicator data-pka-anchor="indicator" {...props} aria-hidden>
      <sc.IndicatorDot data-pka-anchor="indicator.dot" {...props}>
        {isComplete && !isActive && <CheckIcon />}
      </sc.IndicatorDot>
    </sc.Indicator>
  );
};

Indicator.displayName = "ProgressAccordion.Indicator";
Indicator.propTypes = propTypes;
Indicator.defaultProps = defaultProps;

export default Indicator;
