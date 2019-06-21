import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { default as FocusTrapLibrary } from "focus-trap-react/dist/focus-trap-react"; // eslint-disable-line
import Dialog from "./components/Dialog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Trigger from "./components/Trigger";
import FocusTrap from "./components/FocusTrap";
import { extractChildren } from "./helpers";
import useOffsetScroll from "./hooks/useOffsetScroll";

const propTypes = {
  /** The content for the SidePanel. */
  children: PropTypes.node.isRequired,

  /** The width of the open panel. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Callback triggered when the side panel needs to be close */
  onClose: PropTypes.func,

  /** Callback once the sidepanel has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback once the sidepanel has been closed event */
  onAfterClose: PropTypes.func,

  /** Control the visibility of the side panel. This prop makes the side panel */
  isOpen: PropTypes.bool.isRequired,

  /** Control the z position of the sidepanel */
  zIndex: PropTypes.number,

  /** Control y offset of the sidepanel */
  offsetY: PropTypes.number,

  /** Modify the look of the SidePanel */
  kind: PropTypes.oneOf(["default", "child"]),

  /** Disable scroll overflow on document.body when SidePanel is open. */
  disableBodyOverflow: PropTypes.bool,
};

const defaultProps = {
  // this is an internal prop use by SidePanelGroup (Group.js)
  isInline: false, // eslint-disable-line
  kind: "default",
  offsetY: 0,
  onAfterClose: () => {},
  onClose: null,
  onAfterOpen: () => {},
  width: "33%",
  zIndex: 100,
  disableBodyOverflow: true,
};

function SidePanel(props) {
  // Props
  const {
    onAfterClose,
    onAfterOpen,
    onClose,
    width,
    isInline, // eslint-disable-line
    kind,
    offsetY,
    ...moreProps
  } = props;

  // Hooks
  const [isSidePanelMounted, setMount] = React.useState(props.isOpen);
  const offsetScroll = useOffsetScroll(props.offsetY);

  // Refs
  const refTrigger = React.useRef(null);
  const refSidePanelContent = React.useRef(null);
  const refHeader = React.useRef(null);

  // Extracts
  const {
    "SidePanel.FocusTrap": focusTrapExtracted,
    "SidePanel.Footer": footerExtracted,
    "SidePanel.Header": headerExtracted,
    "SidePanel.Overlay": overlayExtracted,
    "SidePanel.Trigger": triggerExtracted,
    children,
  } = extractChildren(props.children, [
    "SidePanel.FocusTrap",
    "SidePanel.Footer",
    "SidePanel.Header",
    "SidePanel.Overlay",
    "SidePanel.Trigger",
  ]);

  // Handlers
  const handleEscKey = event => {
    if (event.key === "Escape") {
      if (props.isOpen && onClose) {
        onClose();
      }
    }
  };

  const handleAnimationEnd = () => {
    if (!props.isOpen) {
      setMount(false);
      onAfterClose();

      if (triggerExtracted) {
        refTrigger.current.focus();
      }
      return;
    }

    onAfterOpen();
  };

  // Effects
  React.useEffect(() => {
    document.addEventListener("keydown", handleEscKey, false);

    if (props.isOpen) {
      setMount(true);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleEscKey, props.isOpen]);

  React.useEffect(() => {
    if (props.disableBodyOverflow) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  }, [props.disableBodyOverflow]);

  const extendedFocusTrapOptions = focusTrapExtracted ? focusTrapExtracted.props : {};
  const fallbackFocus = () => {
    return refHeader.current || refSidePanelContent.current;
  };

  const focusTrapOptions = {
    fallbackFocus,
    clickOutsideDeactivates: true,
    ...extendedFocusTrapOptions,
  };

  let sidePanel = null;

  if (isSidePanelMounted) {
    const dialog = (
      <Dialog
        onAnimationEnd={handleAnimationEnd}
        header={headerExtracted}
        footer={footerExtracted}
        onClose={onClose}
        refSidePanelContent={refSidePanelContent}
        width={width}
        kind={kind}
        isInline={isInline}
        refHeader={refHeader}
        offsetY={offsetScroll}
        {...moreProps}
      >
        {children}
      </Dialog>
    );

    if (isInline) {
      sidePanel = dialog;
    } else {
      sidePanel = ReactDOM.createPortal(
        <React.Fragment>
          <FocusTrapLibrary focusTrapOptions={focusTrapOptions}>
            <div>{dialog}</div>
          </FocusTrapLibrary>
          {overlayExtracted ? React.cloneElement(overlayExtracted, { onClose }) : null}
        </React.Fragment>,
        document.body
      );
    }
  }

  const trigger = triggerExtracted ? React.cloneElement(triggerExtracted, { ref: refTrigger }) : null;

  return (
    <React.Fragment>
      {trigger}
      {sidePanel}
    </React.Fragment>
  );
}

SidePanel.propTypes = propTypes;
SidePanel.defaultProps = defaultProps;
SidePanel.Footer = Footer;
SidePanel.Header = Header;
SidePanel.Overlay = Overlay;
SidePanel.Trigger = Trigger;
SidePanel.FocusTrap = FocusTrap;
SidePanel.componentType = "SidePanel";

export default SidePanel;
