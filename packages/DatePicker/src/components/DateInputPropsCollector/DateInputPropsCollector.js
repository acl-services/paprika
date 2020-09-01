import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";

DateInputPropsCollector.propTypes = propTypes; // eslint-disable-line no-use-before-define
DateInputPropsCollector.defaultProps = defaultProps; // eslint-disable-line no-use-before-define
// eslint-disable-next-line no-use-before-define
DateInputPropsCollector.types = {
  size: constants.defaultSize,
};

const propTypes = {
  /** a11yText on the input. */
  a11yText: PropTypes.string,

  /** Custom clear icon */
  clearIcon: PropTypes.node,

  /** Placeholder of input. */
  placeholder: PropTypes.string,

  /** Size of input. */
  size: PropTypes.oneOf([
    DateInputPropsCollector.types.size.SMALL, // eslint-disable-line no-use-before-define
    DateInputPropsCollector.types.size.MEDIUM, // eslint-disable-line no-use-before-define
    DateInputPropsCollector.types.size.LARGE, // eslint-disable-line no-use-before-define
  ]),

  /** If the value of <input> is valid or not. */
  hasError: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  clearIcon: null,
  placeholder: "",
  size: DateInputPropsCollector.types.size.MEDIUM, // eslint-disable-line no-use-before-define
  hasError: false,
};

// shell component for enhancing development experience
function DateInputPropsCollector() {
  return null;
}

DateInputPropsCollector.displayName = "DatePicker.Input";

export default DateInputPropsCollector;
