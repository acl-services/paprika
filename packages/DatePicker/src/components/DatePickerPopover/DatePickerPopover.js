import PropTypes from "prop-types";
import { AlignTypes } from "@paprika/helpers/lib/customPropTypes";

const propTypes = {
  /** Where the calendar is positioned relative to the trigger. */
  align: PropTypes.oneOf(AlignTypes.ALL),

  /** Distance, in px, between calendar edge and the input. */
  offset: PropTypes.number,

  /** Number setting the z-index for the calendar */
  zIndex: PropTypes.number,
};

const defaultProps = {
  align: AlignTypes.BOTTOM,
  offset: 8,
  zIndex: 1,
};

// shell component for enhancing development experience
function DatePickerPopover() {
  return null;
}

DatePickerPopover.propTypes = propTypes;
DatePickerPopover.defaultProps = defaultProps;

DatePickerPopover.displayName = "DatePicker.Popover";

export default DatePickerPopover;
