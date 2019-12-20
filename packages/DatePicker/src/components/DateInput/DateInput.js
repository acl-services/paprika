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
function DateInput() {
  return null;
}

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

DateInput.displayName = "DatePicker.Input";

export default DateInput;
