import React from "react";
import PropTypes from "prop-types";
import { container } from "./SidePanel.styles";

const propTypes = {
  /** The content for the SidePanel. */
  children: PropTypes.node.isRequired,

  /** Text displaying as title at the top of the controller. */
  // title: PropTypes.string.isRequired,

  /**
   * Modify the side for displaying the SidePanel [left, right] Default is right
   * @string One of the keys in the Object slideDirection
   */
  // slideDirection: PropTypes.oneOf(["left", "right"]),

  /** The width of the open panel. */
  width: PropTypes.number,

  /**
   * Will accept the click event on outside of the sidepanel when losing focus
   * @boolean
   */
  // hasOutsideClick: PropTypes.bool,

  /** Disable the scroll of the body when SidePanel is open. */
  // disabledBodyScroll: PropTypes.bool,

  /**
   * Disable the displaying of the overlay, default is enable
   * @boolean
   */
  // hasOverlay: PropTypes.bool,

  /** Disable the event of key up "esc" default is enable */
  // closeOnEscKey: PropTypes.bool,

  /** Callback for onOpen event */
  // onOpen: PropTypes.func,

  /** Callback for onClose event */
  // onClose: PropTypes.func,

  /**
   * Control the visibility of the side panel. This prop makes the side panel
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * Modify the TOP position for the sidepanel
   * as position relative to the container
   */
  offsetTop: PropTypes.number,
  offsetRigth: PropTypes.number,
  offsetBottom: PropTypes.number,
  /** Visual design style * */
  // kind: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  //
  // /** If true, DOM elements will not be rendered when SidePanel is closed. */
  // canUnmountContent: PropTypes.bool,

  // zindex: PropTypes.number,
};

const defaultProps = {
  closeOnEscKey: true,
  disabledBodyScroll: false,
  hasOutsideClick: true,
  hasOverlay: true,
  kind: "primary",
  offsetBottom: 0,
  offsetRigth: 0,
  offsetTop: 0,
  onClose: null,
  onOpen: null,
  slideDirection: "right",
  width: "33vw",
  zindex: 1,
};

function SidePanel(props) {
  const { width, isOpen, offsetTop, offsetRigth, offsetBottom } = props;
  const containerProps = { width, offsetTop, offsetRigth, offsetBottom };

  if (!isOpen) {
    return null;
  }

  return (
    <div {...containerProps} css={container}>
      {props.children}
    </div>
  );
}

SidePanel.propTypes = propTypes;
SidePanel.defaultProps = defaultProps;

export default SidePanel;
