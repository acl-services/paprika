import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Counter.styles";

const propTypes = {
  /** Background color of the counter. */
  color: PropTypes.oneOf(["grey", "blue", "red"]),

  /** If the counter should display a red dot on the top right corner. Normally used to indicate when there are new items. */
  hasIndicator: PropTypes.bool,

  /** The number displayed inside the counter. */
  quantity: PropTypes.number.isRequired,

  /** Size of counter. It can be small or medium. Default is medium. */
  size: PropTypes.oneOf(ShirtSizes.LIMITED),

  /** When quantity exceeds threshold, it will display "(Threshold)+" inside the counter. Default is 99. */
  threshold: PropTypes.number,
};

const defaultProps = {
  color: "grey",
  hasIndicator: false,
  size: "medium",
  threshold: 99,
};

function Counter(props) {
  const { color, hasIndicator, quantity, size, threshold } = props;
  const exceedsThreshold = quantity > threshold;

  const counterProps = {
    color,
    hasIndicator,
    size,
  };

  return (
    <sc.CounterWrapper data-pka-anchor="counter" {...counterProps} title={exceedsThreshold ? quantity : ""}>
      {exceedsThreshold ? `${threshold}+` : quantity}
    </sc.CounterWrapper>
  );
}

Counter.displayName = "Counter";
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
