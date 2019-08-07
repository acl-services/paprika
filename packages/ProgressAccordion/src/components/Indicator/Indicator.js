import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "@paprika/icon/lib/Check";
import { indicatorStyles, indicatorDotStyles } from "./Indicator.styles";

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
    <div data-pka-anchor="indicator" css={indicatorStyles} {...props} aria-hidden>
      <span data-pka-anchor="indicator.dot" css={indicatorDotStyles} {...props}>
        {isComplete && !isActive && <CheckIcon />}
      </span>
    </div>
  );
};

Indicator.displayName = "ProgressAccordion.Indicator";
Indicator.propTypes = propTypes;
Indicator.defaultProps = defaultProps;

export default Indicator;
