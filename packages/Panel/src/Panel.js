import React from "react";
import PropTypes from "prop-types";
import { zValue } from "@paprika/stylers/lib/helpers";
import { LockBodyScroll, Portal, DOMElementType } from "@paprika/helpers";
import OriginalOverlay from "@paprika/overlay";
import Content from "./components/Content";
import Dialog from "./components/Dialog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Trigger from "./components/Trigger";
import Group from "./components/Group";
import FocusLock from "./components/FocusLock";
import PanelContext from "./PanelContext";
import * as types from "./types";

import { extractChildren, warnOfPropErrors } from "./helpers";
import { useOffsetScroll } from "./hooks";

const PUSH_REF_TRANSITION_DELAY_STYLE = "0.1s";

export default function Panel(props) {
  // Props
  const {
    a11yText,
    container,
    getPushContentElement,
    groupOffsetY,
    height,
    size,
    isInline,
    isOpen,
    offset,
    onAfterClose,
    onAfterOpen,
    onClose,
    slideFrom,
    width,
    zIndex,
    hasAccent,
    ...moreProps
  } = props;

  const offsetTop = "top" in offset ? offset.top : 0;

  // Hooks
  const [isVisible, setIsVisible] = React.useState(isOpen);
  const offsetScroll = useOffsetScroll(offsetTop);

  const calculatedOffset = {
    top: offsetScroll,
    left: "left" in offset ? offset.left : 0,
    right: "right" in offset ? offset.right : 0,
  };

  // Refs
  const refTrigger = React.useRef(null);
  const refPanelContent = React.useRef(null);
  const refHeader = React.useRef(null);

  // Extracts
  const {
    "Panel.FocusLock": focusLockExtracted,
    "Panel.Footer": footerExtracted,
    "Panel.Header": headerExtracted,
    "Panel.Overlay": overlayExtracted,
    "Panel.Trigger": triggerExtracted,
    children,
  } = extractChildren(props.children, [
    "Panel.FocusLock",
    "Panel.Footer",
    "Panel.Header",
    "Panel.Overlay",
    "Panel.Trigger",
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

  React.useEffect(() => {
    warnOfPropErrors(props);
  }, []);

  React.useLayoutEffect(() => {
    if (getPushContentElement === null) return;

    const pushContentRefStyle = getPushContentElement().style;
    let PUSH_REF_TRANSITION_STYLE = "";
    pushContentRefStyle.transitionDelay = PUSH_REF_TRANSITION_DELAY_STYLE;

    switch (slideFrom) {
      case types.slideFroms.LEFT:
        pushContentRefStyle.marginLeft = isOpen ? width : 0;
        PUSH_REF_TRANSITION_STYLE = isOpen ? "margin-left 0.2s ease" : 0;
        break;
      case types.slideFroms.BOTTOM:
        break;
      default:
        pushContentRefStyle.marginRight = isOpen ? width : 0;
        PUSH_REF_TRANSITION_STYLE = isOpen ? "margin-right 0.2s ease" : 0;
        break;
    }

    return () => {
      pushContentRefStyle.transition = PUSH_REF_TRANSITION_STYLE;
      pushContentRefStyle.transitionDelay = PUSH_REF_TRANSITION_DELAY_STYLE;
    };
  }, [isOpen, slideFrom, getPushContentElement, width]);

  const focusLockProps = focusLockExtracted ? focusLockExtracted.props : {};

  function handleEscKey(event) {
    if (event.key === "Escape") {
      event.stopPropagation();

      onClose();
    }
  }

  const ariaLabel = a11yText || (headerExtracted ? headerExtracted.props.children : null);

  let sidePanel = null;

  const contextValue = {
    size,
  };

  if (isVisible) {
    const dialog = (
      <Dialog
        a11yText={ariaLabel}
        data-pka-anchor="panel"
        footer={footerExtracted}
        getPushContentElement={getPushContentElement}
        groupOffsetY={groupOffsetY}
        header={headerExtracted}
        height={height}
        size={size}
        isInline={isInline}
        isOpen={isOpen}
        offset={calculatedOffset}
        onAnimationEnd={handleAnimationEnd}
        onClose={onClose}
        onKeyDown={handleEscKey}
        refHeader={refHeader}
        refPanelContent={refPanelContent}
        slideFrom={slideFrom}
        width={width}
        zIndex={zIndex}
        hasAccent={hasAccent}
        {...moreProps}
      >
        {children}
      </Dialog>
    );

    if (isInline) {
      sidePanel = dialog;
    } else if (!overlayExtracted) {
      sidePanel = (
        <Portal active container={container}>
          {dialog}
        </Portal>
      );
    } else {
      const { children, focusLockOptions, ...morePropsForOverlay } = overlayExtracted.props;
      sidePanel = (
        <Portal active container={container}>
          <OriginalOverlay
            data-pka-anchor="panel.overlay"
            focusLockOptions={focusLockProps}
            hasBackdrop
            isOpen={isOpen}
            onClose={onClose}
            zIndex={zIndex}
            container={container}
            {...morePropsForOverlay}
          >
            {state => React.cloneElement(dialog, { state })}
          </OriginalOverlay>
        </Portal>
      );
    }
  }

  const trigger = triggerExtracted ? React.cloneElement(triggerExtracted, { ref: refTrigger }) : null;
  const shouldDisableBodyOverflow = (overlayExtracted || isInline) && isOpen;

  return (
    <PanelContext.Provider value={contextValue}>
      {shouldDisableBodyOverflow && <LockBodyScroll />}
      {trigger}
      {sidePanel}
    </PanelContext.Provider>
  );
}

Panel.types = {
  slideFrom: types.slideFroms,
  widthType: types.widthTypes,
  size: types.sizes,
};

const propTypes = {
  /* Description of the Panel dialog for assistive technology */
  a11yText: PropTypes.string,

  /** The content for the Panel. */
  children: PropTypes.node.isRequired,

  /** Portal container for the Panel (DOM element) */
  container: DOMElementType,

  /** Function that provides the container DOM element to be pushed. */
  getPushContentElement: PropTypes.func,

  /** Y offset that is passed down from <Panel.Group> */
  groupOffsetY: PropTypes.number,

  /** The height of the open Panel (when slide in from bottom) */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Control the size of the Panel */
  size: PropTypes.oneOfType([types.sizes.MEDIUM, types.sizes.LARGE]),

  /** Render the panel inline */
  isInline: PropTypes.bool,

  /** Control the visibility of the Panel. This prop makes the Panel appear. */
  isOpen: PropTypes.bool,

  /** Control offset of the Panel. Only use 'top' when sliding in from the left or right. Only use 'left' or 'right' when sliding in from the bottom. */
  offset: PropTypes.shape({ top: PropTypes.number, left: PropTypes.number, right: PropTypes.number }),

  /** Callback once the Panel has been closed event */
  onAfterClose: PropTypes.func,

  /** Callback once the Panel has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback triggered when the Panel needs to be close */
  onClose: PropTypes.func,

  /** Control where the Panel slides in from */
  slideFrom: PropTypes.oneOf([types.slideFroms.RIGHT, types.slideFroms.LEFT, types.slideFroms.BOTTOM]),

  /** The width of the open Panel (when slide in from left or right) */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    types.widthTypes.SMALL,
    types.widthTypes.MEDIUM,
    types.widthTypes.LARGE,
  ]),

  /** Control the z-index of the Panel */
  zIndex: PropTypes.number,

  /** Differentiate between similar coloured UI elements */
  hasAccent: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  container: null,
  getPushContentElement: null,
  groupOffsetY: 0,
  height: "33%",
  size: types.sizes.MEDIUM,
  isInline: false,
  isOpen: false,
  offset: { top: 0, left: 0, right: 0 },
  onAfterClose: () => {},
  onAfterOpen: () => {},
  onClose: null,
  slideFrom: types.slideFroms.RIGHT,
  width: "33%",
  zIndex: zValue(7),
  hasAccent: false,
};

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
Panel.displayName = "Panel";

Panel.Content = Content;
Panel.FocusLock = FocusLock;
Panel.Footer = Footer;
Panel.Group = Group;
Panel.Header = Header;
Panel.Overlay = Overlay;
Panel.Trigger = Trigger;
