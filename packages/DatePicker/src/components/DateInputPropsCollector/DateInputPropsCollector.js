import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

const propTypes = {
  /** a11yText on the input. */
  a11yText: PropTypes.string,

  /** Placeholder of input. */
  placeholder: PropTypes.string,

  /** Size of input. */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),

  /** If the value of <input> is valid or not. */
  hasError: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  placeholder: "",
  size: ShirtSizes.MEDIUM,
  hasError: false,
};

// shell component for enhancing development experience
function DateInputPropsCollector() {
  return null;
}

DateInputPropsCollector.propTypes = propTypes;
DateInputPropsCollector.defaultProps = defaultProps;

DateInputPropsCollector.displayName = "DatePicker.Input";

export default DateInputPropsCollector;
