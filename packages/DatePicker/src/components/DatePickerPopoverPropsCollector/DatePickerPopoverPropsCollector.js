import tokens from "@paprika/tokens";
import { toInt } from "@paprika/stylers/lib/helpers";
import Popover from "@paprika/popover";

const defaultProps = {
  ...Popover.defaultProps,
  offset: toInt(tokens.space),
};

// Shell component for enhancing DX (developer experience)
export default function DatePickerPopoverPropsCollector() {
  return null;
}

DatePickerPopoverPropsCollector.propTypes = Popover.propTypes;
DatePickerPopoverPropsCollector.defaultProps = defaultProps;
DatePickerPopoverPropsCollector.displayName = "DatePicker.Popover";
