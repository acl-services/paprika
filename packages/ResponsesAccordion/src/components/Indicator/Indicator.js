import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "@paprika/icon/lib/Check";
import { indicatorStyles, indicatorDotStyles } from "./Indicator.styles";

const propTypes = {
  isActive: PropTypes.bool,
  isComplete: PropTypes.bool,
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

Indicator.displayName = "ResponsesAccordion.Indicator";
Indicator.propTypes = propTypes;
Indicator.defaultProps = defaultProps;

export default Indicator;
