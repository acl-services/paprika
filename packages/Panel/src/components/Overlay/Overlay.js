/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { FocusPropTypes } from "@paprika/helpers";

const propTypes = {
  backdropClassName: PropTypes.string,
  children: PropTypes.func,

  /** container of the Overlay element */
  container: PropTypes.instanceOf(Element),

  focusLockOptions: PropTypes.shape(FocusPropTypes),
  hasBackdrop: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,

  /** z-index of the Overlay wrapper */
  zIndex: PropTypes.number,
};
const defaultProps = {
  backdropClassName: null,
  children: () => {},
  container: null,
  focusLockOptions: {},
  hasBackdrop: true,
  onAfterClose: () => {},
  onAfterOpen: () => {},
  onClose: () => {},
  zIndex: null,
};

const Overlay = () => <></>;

export default Overlay;

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
Overlay.displayName = "Panel.Overlay";
