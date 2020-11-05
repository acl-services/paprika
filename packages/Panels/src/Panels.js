import React from "react";
import PropTypes from "prop-types";
import { zValue } from "@paprika/stylers/lib/helpers";
import LockBodyScroll from "@paprika/helpers/lib/components/LockBodyScroll";
import Portal from "@paprika/helpers/lib/components/Portal";
import Content from "./components/Content";
import Dialog from "./components/Dialog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Trigger from "./components/Trigger";
import Group from "./components/Group";
import FocusLock from "./components/FocusLock";
import * as types from "./types";

import { extractChildren } from "./helpers";
import { useOffsetScroll } from "./hooks";

const PUSH_REF_TRANSITION_STYLE = "margin-right 0.2s ease";
const PUSH_REF_TRANSITION_DELAY_STYLE = "0.1s";

export default function Panels(props) {
  // Props
  const {
    a11yText,
    getPushContentElement,
    groupOffsetY,
    isCompact,
    isOpen,
    isInline,
    isSlideFromLeft,
    kind,
    offsetY,
    onAfterClose,
    onAfterOpen,
    onClose,
    width,
    zIndex,
    ...moreProps
  } = props;

  // Hooks
  const [isVisible, setIsVisible] = React.useState(isOpen);
  const offsetScroll = useOffsetScroll(offsetY);

  // Refs
  const refTrigger = React.useRef(null);
  const refPanelsContent = React.useRef(null);
  const refHeader = React.useRef(null);

  // Extracts
  const {
    "Panels.FocusLock": focusLockExtracted,
    "Panels.Footer": footerExtracted,
    "Panels.Header": headerExtracted,
    "Panels.Overlay": overlayExtracted,
    "Panels.Trigger": triggerExtracted,
    children,
  } = extractChildren(props.children, [
    "Panels.FocusLock",
    "Panels.Footer",
    "Panels.Header",
    "Panels.Overlay",
    "Panels.Trigger",
  ]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
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
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  React.useLayoutEffect(() => {
    if (getPushContentElement === null) return;

    const pushContentRefStyle = getPushContentElement().style;

    pushContentRefStyle.transition = PUSH_REF_TRANSITION_STYLE;
    pushContentRefStyle.transitionDelay = PUSH_REF_TRANSITION_DELAY_STYLE;

    if (isOpen) {
      pushContentRefStyle.marginRight = width;
    } else {
      pushContentRefStyle.transitionDelay = "0s";
      pushContentRefStyle.marginRight = "0";
    }

    return () => {
      pushContentRefStyle.transition = PUSH_REF_TRANSITION_STYLE;
      pushContentRefStyle.transitionDelay = PUSH_REF_TRANSITION_DELAY_STYLE;
    };
  }, [isOpen, getPushContentElement, width]);

  const focusLockProps = focusLockExtracted ? focusLockExtracted.props : {};

  function handleEscKey(event) {
    if (event.key === "Escape") {
      event.stopPropagation();

      onClose();
    }
  }

  const ariaLabel = a11yText || (headerExtracted ? headerExtracted.props.children : null);

  let sidePanel = null;

  if (isVisible) {
    const dialog = (
      <Dialog
        a11yText={ariaLabel}
        data-pka-anchor="panels"
        footer={footerExtracted}
        getPushContentElement={getPushContentElement}
        groupOffsetY={groupOffsetY}
        header={headerExtracted}
        isCompact={isCompact}
        isInline={isInline}
        isOpen={isOpen}
        isSlideFromLeft={isSlideFromLeft}
        kind={kind}
        offsetY={offsetScroll}
        onAnimationEnd={handleAnimationEnd}
        onClose={onClose}
        onKeyDown={handleEscKey}
        refHeader={refHeader}
        refPanelsContent={refPanelsContent}
        width={width}
        zIndex={zIndex}
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
            {overlayExtracted ? React.cloneElement(overlayExtracted, { onClose, zIndex }) : null}
            <FocusLock as="div" {...focusLockProps}>
              {dialog}
            </FocusLock>
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

Panels.types = {
  kind: types.sidePanelKinds,
};

const propTypes = {
  /* Description of the Panels dialog for assistive technology */
  a11yText: PropTypes.string,

  /** The content for the Panels. */
  children: PropTypes.node.isRequired,

  /** Function that provides the container DOM element to be pushed. */
  getPushContentElement: PropTypes.func,

  /** Y offset that is passed down from <Panels.Group> */
  groupOffsetY: PropTypes.number,

  /** Control the compactness of the side panel */
  isCompact: PropTypes.bool,

  /** Render the panels inline */
  isInline: PropTypes.bool,

  /** Control the visibility of the side panel. This prop makes the side panel appear */
  isOpen: PropTypes.bool.isRequired,

  /** Control if the side panel slides from the left */
  isSlideFromLeft: PropTypes.bool,

  /** Modify the look of the Panels */
  kind: PropTypes.oneOf([Panels.types.kind.DEFAULT, Panels.types.kind.CHILD, Panels.types.kind.PRIMARY]),

  /** Control y offset of the panels */
  offsetY: PropTypes.number,

  /** Callback once the panels has been closed event */
  onAfterClose: PropTypes.func,

  /** Callback once the panels has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback triggered when the side panel needs to be close */
  onClose: PropTypes.func,

  /** The width of the open panel. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Control the z position of the panels */
  zIndex: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  getPushContentElement: null,
  groupOffsetY: 0,
  isCompact: false,
  isInline: false,
  isSlideFromLeft: false,
  kind: Panels.types.kind.DEFAULT,
  offsetY: 0,
  onAfterClose: () => {},
  onAfterOpen: () => {},
  onClose: null,
  width: "33%",
  zIndex: zValue(7),
};

Panels.propTypes = propTypes;
Panels.defaultProps = defaultProps;
Panels.displayName = "Panels";

Panels.Content = Content;
Panels.FocusLock = FocusLock;
Panels.Footer = Footer;
Panels.Group = Group;
Panels.Header = Header;
Panels.Overlay = Overlay;
Panels.Trigger = Trigger;
