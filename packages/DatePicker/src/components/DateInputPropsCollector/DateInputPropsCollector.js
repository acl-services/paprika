import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as types from "../../types";

const propTypes = {
  /** a11yText on the input. */
  a11yText: PropTypes.string,

  /** Custom clear icon */
  clearIcon: PropTypes.node,

  /** Placeholder of input. */
  placeholder: PropTypes.string,

  /** Size of input. */
  size: PropTypes.oneOf([types.SMALL, types.MEDIUM, types.LARGE]),

  /** If the value of <input> is valid or not. */
  hasError: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  clearIcon: null,
  placeholder: "",
  size: types.MEDIUM,
  hasError: false,
};

// shell component for enhancing development experience
function DateInputPropsCollector() {
  return null;
}

DateInputPropsCollector.propTypes = propTypes;
DateInputPropsCollector.defaultProps = defaultProps;
DateInputPropsCollector.types = {
  size: constants.defaultSize,
};

DateInputPropsCollector.displayName = "DatePicker.Input";

export default DateInputPropsCollector;
