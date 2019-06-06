import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react/dist/focus-trap-react";
import Overlay from "./components/Overlay";
import Trigger from "./components/Trigger";
import Header from "./components/Header";
import Dialog from "./components/Dialog";
import Content from "./components/Content";
import { extractChildren } from "./helpers";
import useOffsetScroll from "./hooks/useOffsetScroll";

const propTypes = {
  /** The content for the SidePanel. */
  children: PropTypes.node.isRequired,

  /** The width of the open panel. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Click event for "Escape" key */
  onEscKey: PropTypes.func,

  /** Callback once the sidepanel has been opened event */
  onOpened: PropTypes.func,

  /** Callback once the sidepanel has been closed event */
  onClosed: PropTypes.func,

  /** Control the visibility of the side panel. This prop makes the side panel */
  isOpen: PropTypes.bool.isRequired,

  /** Control the z position of the sidepanel */
  zIndex: PropTypes.number,

  /** Control y offset of the sidepanel */
  offsetY: PropTypes.number,

  /** Apply a different format to the parent to look like a descendant child of a Parent SidePanel */
  kind: PropTypes.oneOf(["default", "child"]),
};

const defaultProps = {
  isInline: false, // this is an internal prop use by SidePanelGroup (Group.js)
  kind: "default",
  offsetY: 0,
  onClosed: () => {},
  onEscKey: null,
  onOpened: () => {},
  width: "33%",
  zIndex: 100,
};

function SidePanel(props) {
  // Props
  const { onClosed, onOpened, onEscKey, width, isInline, kind, ...moreProps } = props;

  // Hooks
  const [isSidePanelMounted, setMount] = React.useState(props.isOpen);
  const offsetScroll = useOffsetScroll(props.offsetY);

  // Refs
  const refTrigger = React.useRef(null);
  const refSidePanel = React.useRef(null);
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
      if (!props.isOpen) {
        if (onEscKey) {
          onEscKey();
        }
      }
    }
  };

  const handleAnimationEnd = () => {
    if (!props.isOpen) {
      setMount(false);
      onClosed();

      if (TriggerExtracted) {
        refTrigger.current.focus();
      }
      return;
    }

    onOpened();
  };

  // Effects
  React.useEffect(() => {
    document.addEventListener("keydown", handleEscKey, false);
    if (props.isOpen) {
      setMount(true);
    }

    return () => {
      document.removeEventListener("keyUp", handleEscKey);
    };
  }, [props.isOpen]);

  const extendedFocusTrapOptions = FocusTrapExtracted ? FocusTrapExtracted.props : {};
  const focusTrapOptions = {
    fallbackFocus: () => {
      return refHeader.current;
    },
    clickOutsideDeactivates: true,
    ...extendedFocusTrapOptions,
  };

  let sidePanel = null;

  if (isSidePanelMounted) {
    const dialog = (
      <Dialog
        handleAnimationEnd={handleAnimationEnd}
        width={width}
        ref={refSidePanel}
        header={HeaderExtracted}
        {...moreProps}
        offsetY={offsetScroll}
        refHeader={refHeader}
        isInline={isInline}
        kind={kind}
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
          {OverlayExtracted}
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
SidePanel.Content = Content;
SidePanel.componentType = "SidePanel";

export default SidePanel;
