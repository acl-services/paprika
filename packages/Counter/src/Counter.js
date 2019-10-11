import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import counterStyles from "./Counter.styles";

const propTypes = {
  hasIndicator: PropTypes.bool,
  quantity: PropTypes.number.isRequired,
  size: ShirtSizes.LIMITED,
  threshold: PropTypes.number,
  type: PropTypes.oneOf(["default", "blue", "red"]),
};

const defaultProps = {
  hasIndicator: false,
  size: "medium",
  threshold: 99,
  type: "default",
};

function Counter(props) {
  const { hasIndicator, quantity, size, threshold, type } = props;
  const exceedsThreshold = quantity > threshold;

  const counterProps = {
    hasIndicator,
    size,
    type,
  };

  return (
    <span css={counterStyles} {...counterProps} title={exceedsThreshold ? quantity : ""}>
      {exceedsThreshold ? `${threshold}+` : quantity}
    </span>
  );
}

Counter.displayName = "Counter";
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
