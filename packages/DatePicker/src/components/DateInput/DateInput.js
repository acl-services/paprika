import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

const propTypes = {
  /** a11yText on the input. */
  a11yText: PropTypes.string,

  /** Placeholder of input. */
  placeholder: PropTypes.string,

  /** Size of input. */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  placeholder: "",
  size: "medium",
};

// shell component for enhancing UXDeveloper
function DateInput() {
  return null;
}

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

DateInput.displayName = "DatePicker.Input";

export default DateInput;
