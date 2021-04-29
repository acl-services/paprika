/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { FocusPropTypes } from "@paprika/helpers";

const propTypes = {
  backdropClassName: PropTypes.string,
  children: PropTypes.func,

  /** container of the Overlay element */
  container: PropTypes.node,

  focusLockOptions: PropTypes.shape(FocusPropTypes),
  hasBackdrop: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,

  /** The z-index of the Panel Overlay */
  zIndex: PropTypes.number,
};
const defaultProps = {};

const Overlay = () => <></>;

export default Overlay;

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
Overlay.displayName = "Panel.Overlay";
