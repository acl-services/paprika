/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";
import tokens from "@paprika/tokens";
import { toInt, zValue } from "@paprika/stylers/lib/helpers";
import Popover from "@paprika/popover";

const defaultProps = {
  align: Popover.types.align.BOTTOM,
  isDark: false,
  isEager: false,
  isOpen: null,
  isPortal: true,
  defaultIsOpen: null,
  edge: null,
  maxWidth: 320,
  minWidth: 0,
  onClose: null,
  offset: toInt(tokens.space),
  getPositioningElement: null,
  getScrollContainer: null,
  shouldKeepFocus: false,
  zIndex: zValue(1),
};

const propTypes = {
  /** Where the popover content is positioned relative to the trigger or getPositioningElement. */
  align: PropTypes.oneOf([
    Popover.types.align.TOP,
    Popover.types.align.RIGHT,
    Popover.types.align.BOTTOM,
    Popover.types.align.LEFT,
  ]),

  /** Content of the popover */
  children: PropTypes.node.isRequired,

  /** Displays as a "tooltip" style with white text on black background. */
  isDark: PropTypes.bool,

  /** Activated by mouseOver / focus instead of onClick. */
  isEager: PropTypes.bool,

  /** How "controlled" popovers are shown / hidden. */
  isOpen: PropTypes.bool,

  /** This renders the popover inline in the DOM and not in a react portal. WARNING: will have side effects with paprika side panels and modals, use with caution. */
  isPortal: PropTypes.bool,

  /** How "uncontrolled" popovers can be rendered open by default. */
  defaultIsOpen: PropTypes.bool,

  /** Where the edge of the popover content is based on the trigger or getPositioningElement */
  edge: PropTypes.oneOf([Popover.types.align.LEFT, Popover.types.align.RIGHT, null]),

  /** Maximum width of popover content. Using a number is recommended and implies px units. */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Minimumn width of popover content. Using a number is recommended and implies px units. */
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Callback to fire when user closes popover. */
  onClose: PropTypes.func,

  /** Distance, in px, between popover content edge and trigger / getPositioningElement. */
  offset: PropTypes.number,

  /** Function that provides DOM element to use as target for positioning the popover. */
  getPositioningElement: PropTypes.func,

  /** Function that provides the scrolling DOM element that contains the popover. */
  getScrollContainer: PropTypes.func,

  /** If focus will stay at the trigger when showing popover. Popover can still be closed when clicking outside or pressing escape key. */
  shouldKeepFocus: PropTypes.bool,

  /** Number setting the z-index for the popover content / tip. */
  zIndex: PropTypes.number,
};

// Shell component for enhancing DX (developer experience)
export default function DatePickerPopoverPropsCollector() {
  return <></>;
}

DatePickerPopoverPropsCollector.propTypes = propTypes;
DatePickerPopoverPropsCollector.defaultProps = defaultProps;
DatePickerPopoverPropsCollector.displayName = "DatePicker.Popover";
