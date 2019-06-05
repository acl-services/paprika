import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import { visuallyHidden } from "@paprika/stylers/lib/includes";
import { overlayCSS } from "./Overlay.styles";

const propTypes = {
  /**
   * Will accept the click event on outside of the sidepanel when losing focus
   * @boolean
   */
  hasOutsideClick: PropTypes.bool,

  /** Disable the scroll of the body when SidePanel is open. */
  // disabledBodyScroll: PropTypes.bool,

  background: PropTypes.string,
  onClose: PropTypes.func,
  opacity: PropTypes.string,
  /** Control the z position of the sidepanel overlay */
  zIndex: PropTypes.number,
};

const defaultProps = {
  background: "#000",
  opacity: "0.2",
  onClose: null,
  zIndex: 99,
  hasOutsideClick: true,
};

export default function Overlay(props) {
  const { onClose, hasOutsideClick, ...moreProps } = props;

  const handleClick = () => {
    if (hasOutsideClick) {
      onClose();
    }
  };

  const vh = visuallyHidden;

  return (
    <RawButton as="div" {...moreProps} onClick={handleClick} css={overlayCSS}>
      <span css={vh}>Close</span>
    </RawButton>
  );
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
Overlay.componentType = "SidePanel.Overlay";
