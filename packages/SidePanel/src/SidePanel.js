import React from "react";
import PropTypes from "prop-types";
import { zValue } from "@paprika/stylers/lib/helpers";
import LockBodyScroll from "@paprika/helpers/lib/components/LockBodyScroll";
import Portal from "@paprika/helpers/lib/components/Portal";
import Dialog from "./components/Dialog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Trigger from "./components/Trigger";
import Group from "./components/Group";
import FocusLock from "./components/FocusLock";

import { extractChildren } from "./helpers";
import { useOffsetScroll } from "./hooks";

const propTypes = {
  /** The content for the SidePanel. */
  children: PropTypes.node.isRequired,

  /** Y offset that is passed down from <SidePanel.Group> */
  groupOffsetY: PropTypes.number,

  /** The width of the open panel. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Callback triggered when the side panel needs to be close */
  onClose: PropTypes.func,

  /** Callback once the sidepanel has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback once the sidepanel has been closed event */
  onAfterClose: PropTypes.func,

  /** Control the compactness of the side panel */
  isCompact: PropTypes.bool,

  /** Control the visibility of the side panel. This prop makes the side panel appear */
  isOpen: PropTypes.bool.isRequired,

  /** Control the z position of the sidepanel */
  zIndex: PropTypes.number,

  /** Control y offset of the sidepanel */
  offsetY: PropTypes.number,

  /** Modify the look of the SidePanel */
  kind: PropTypes.oneOf(["default", "child"]),

  /** Render the sidepanel inline */
  isInline: PropTypes.bool,
};

const defaultProps = {
  groupOffsetY: 0,
  isCompact: false,
  isInline: false,
  kind: "default",
  offsetY: 0,
  onAfterClose: () => {},
  onClose: null,
  onAfterOpen: () => {},
  width: "33%",
  zIndex: zValue(7),
};

function SidePanel(props) {
  // Props
  const {
    onAfterClose,
    onAfterOpen,
    onClose,
    groupOffsetY,
    width,
    isCompact,
    isInline,
    kind,
    offsetY,
    isOpen,
    ...moreProps
  } = props;

  // Hooks
  const [isVisible, setIsVisible] = React.useState(props.isOpen);
  const offsetScroll = useOffsetScroll(offsetY);

  // Refs
  const refTrigger = React.useRef(null);
  const refSidePanelContent = React.useRef(null);
  const refHeader = React.useRef(null);

  // Extracts
  const {
    "SidePanel.FocusLock": focusLockExtracted,
    "SidePanel.Footer": footerExtracted,
    "SidePanel.Header": headerExtracted,
    "SidePanel.Overlay": overlayExtracted,
    "SidePanel.Trigger": triggerExtracted,
    children,
  } = extractChildren(props.children, [
    "SidePanel.FocusLock",
    "SidePanel.Footer",
    "SidePanel.Header",
    "SidePanel.Overlay",
    "SidePanel.Trigger",
  ]);

  const handleAnimationEnd = () => {
    if (!props.isOpen) {
      setIsVisible(false);
      onAfterClose();

      if (triggerExtracted) {
        refTrigger.current.focus();
      }
      return;
    }

    onAfterOpen();
  };

  React.useEffect(() => {
    if (props.isOpen) {
      setIsVisible(true);
    }
  }, [props.isOpen]);

  const focusLockProps = focusLockExtracted ? focusLockExtracted.props : {};

  function handleEscKey(event) {
    if (event.key === "Escape") {
      event.stopPropagation();

      onClose();
    }
  }

  let sidePanel = null;

  if (isVisible) {
    const dialog = (
      <Dialog
        data-pka-anchor="sidepanel"
        footer={footerExtracted}
        groupOffsetY={groupOffsetY}
        header={headerExtracted}
        isCompact={isCompact}
        isInline={isInline}
        isOpen={isOpen}
        kind={kind}
        offsetY={offsetScroll}
        onAnimationEnd={handleAnimationEnd}
        onClose={onClose}
        onKeyDown={handleEscKey}
        refSidePanelContent={refSidePanelContent}
        refHeader={refHeader}
        width={width}
        {...moreProps}
      >
        {children}
      </Dialog>
    );

    if (isInline) {
      sidePanel = dialog;
    } else {
      sidePanel = (
        <Portal active={!isInline}>
          <React.Fragment>
            <FocusLock as="div" {...focusLockProps}>
              {dialog}
            </FocusLock>
            {overlayExtracted ? React.cloneElement(overlayExtracted, { onClose }) : null}
          </React.Fragment>
        </Portal>
      );
    }
  }

  const trigger = triggerExtracted ? React.cloneElement(triggerExtracted, { ref: refTrigger }) : null;
  const shouldDisableBodyOverflow = (overlayExtracted || isInline) && isOpen;

  return (
    <React.Fragment>
      {shouldDisableBodyOverflow && <LockBodyScroll />}
      {trigger}
      {sidePanel}
    </React.Fragment>
  );
}

SidePanel.defaultProps = defaultProps;
SidePanel.FocusLock = FocusLock;
SidePanel.Footer = Footer;
SidePanel.Group = Group;
SidePanel.Header = Header;
SidePanel.Overlay = Overlay;
SidePanel.propTypes = propTypes;
SidePanel.Trigger = Trigger;
SidePanel.displayName = "SidePanel";

export default SidePanel;
