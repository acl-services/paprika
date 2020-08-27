import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as types from "./types";
import counterStyles from "./Counter.styles";

Counter.propTypes = propTypes; // eslint-disable-line no-use-before-define
Counter.defaultProps = defaultProps; // eslint-disable-line no-use-before-define
// eslint-disable-next-line no-use-before-define
Counter.types = {
  color: { GREY: types.GREY, BLUE: types.BLUE, RED: types.RED },
  size: constants.limitedSize,
};

const propTypes = {
  /** Background color of the counter. */
  color: PropTypes.oneOf([Counter.types.color.GREY, Counter.types.color.BLUE, Counter.types.color.RED]), // eslint-disable-line no-use-before-define

  /** If the counter should display a red dot on the top right corner. Normally used to indicate when there are new items. */
  hasIndicator: PropTypes.bool,

  /** The number displayed inside the counter. */
  quantity: PropTypes.number.isRequired,

  /** Size of counter. It can be small or medium. Default is medium. */
  size: PropTypes.oneOf([Counter.types.size.SMALL, Counter.types.size.MEDIUM]), // eslint-disable-line no-use-before-define

  /** When quantity exceeds threshold, it will display "(Threshold)+" inside the counter. Default is 99. */
  threshold: PropTypes.number,
};

const defaultProps = {
  color: Counter.types.color.GREY, // eslint-disable-line no-use-before-define
  hasIndicator: false,
  size: Counter.types.size.MEDIUM, // eslint-disable-line no-use-before-define
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
    <span data-pka-anchor="counter" css={counterStyles} {...counterProps} title={exceedsThreshold ? quantity : ""}>
      {exceedsThreshold ? `${threshold}+` : quantity}
    </span>
  );
}

Counter.displayName = "Counter";

export default Counter;
