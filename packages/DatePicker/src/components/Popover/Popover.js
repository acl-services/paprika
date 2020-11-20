/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";
import tokens from "@paprika/tokens";
import { toInt } from "@paprika/stylers/lib/helpers";
import Popover from "@paprika/popover";

const defaultProps = {
  ...Popover.defaultProps,
  offset: toInt(tokens.space),
};

const propTypes = {
  ...Popover.propTypes,
  offset: PropTypes.number,
};

// Shell component for enhancing DX (developer experience)
export default function DatePickerPopoverPropsCollector() {
  return <></>;
}

DatePickerPopoverPropsCollector.propTypes = propTypes;
DatePickerPopoverPropsCollector.defaultProps = defaultProps;
DatePickerPopoverPropsCollector.displayName = "DatePicker.Popover";
