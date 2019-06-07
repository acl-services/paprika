import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react/dist/focus-trap-react";
import Overlay from "./components/Overlay";
import Trigger from "./components/Trigger";
import Header from "./components/Header";
import Dialog from "./components/Dialog";
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

  /** Apply a different format to the parent to look like a descendant child or like a regular SidePanel */
  kind: PropTypes.oneOf(["default", "child"]),

  /** Disable the scroll of the overlay when SidePanel is open. */
  scrollablePageBody: PropTypes.bool,
};

const defaultProps = {
  isInline: false, // this is an internal prop use by SidePanelGroup (Group.js)
  kind: "default",
  offsetY: 0,
  onAfterClose: () => {},
  onClose: null,
  onAfterOpen: () => {},
  width: "33%",
  zIndex: 100,
  scrollablePageBody: false,
};

function SidePanel(props) {
  // Props
  const { onAfterClose, onAfterOpen, onClose, width, isInline, kind, ...moreProps } = props;

  // Hooks
  const [isSidePanelMounted, setMount] = React.useState(props.isOpen);
  const offsetScroll = useOffsetScroll(props.offsetY);

  // Refs
  const refTrigger = React.useRef(null);
  const refSidePanelContent = React.useRef(null);
  const refHeader = React.useRef(null);

  // Extracts
  const {
    "SidePanel.Trigger": TriggerExtracted,
    "SidePanel.Overlay": OverlayExtracted,
    "SidePanel.Header": HeaderExtracted,
    "SidePanel.FocusTrap": FocusTrapExtracted,
    children,
  } = extractChildren(props.children, [
    "SidePanel.Trigger",
    "SidePanel.Overlay",
    "SidePanel.Header",
    "SidePanel.FocusTrap",
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

      if (TriggerExtracted) {
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
  }, [props.isOpen]);

  const extendedFocusTrapOptions = FocusTrapExtracted ? FocusTrapExtracted.props : {};
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
        handleAnimationEnd={handleAnimationEnd}
        header={HeaderExtracted}
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
          <FocusTrap focusTrapOptions={focusTrapOptions}>{dialog}</FocusTrap>
          {OverlayExtracted ? React.cloneElement(OverlayExtracted, { onClose }) : null}
        </React.Fragment>,
        document.body
      );
    }
  }

  const trigger = TriggerExtracted ? React.cloneElement(TriggerExtracted, { ref: refTrigger }) : null;

  return [trigger, sidePanel];
}

SidePanel.propTypes = propTypes;
SidePanel.defaultProps = defaultProps;
SidePanel.Overlay = Overlay;
SidePanel.Trigger = Trigger;
SidePanel.Header = Header;
SidePanel.componentType = "SidePanel";

export default SidePanel;
