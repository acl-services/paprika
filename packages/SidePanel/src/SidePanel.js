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

  /** Callback for onOpen event */
  onOpen: PropTypes.func,

  /** Callback for onClose event */
  onClose: PropTypes.func,

  /**
   * Control the visibility of the side panel. This prop makes the side panel
   */
  isOpen: PropTypes.bool.isRequired,

  /** Control the z position of the sidepanel */
  zIndex: PropTypes.number,

  /** Control y offset of the sidepanel */
  offsetY: PropTypes.number,
};

const defaultProps = {
  offsetY: 0,
  onClose: () => {},
  onEscKey: null,
  onOpen: () => {},
  width: "33%",
  zIndex: 100,
};

function SidePanel(props) {
  // Props
  const { onClose, onOpen, onEscKey, width, ...moreProps } = props;

  // Hooks
  const [isSidePanelMounted, setMount] = React.useState(props.isOpen);
  const offsetScroll = useOffsetScroll(props.offsetY);

  // Refs
  const refTrigger = React.useRef(null);
  const refSidePanel = React.useRef(null);
  const refHeader = React.useRef(null);

  // Extracts
  const { Trigger: TriggerExtracted, Overlay: OverlayExtracted, Header: HeaderExtracted, children } = extractChildren(
    props.children
  );

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
      onClose();

      if (TriggerExtracted) {
        refTrigger.current.focus();
      }
      return;
    }

    onOpen();
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

  const focusTrapOptions = {
    fallbackFocus: () => {
      return refHeader.current;
    },
    clickOutsideDeactivates: true,
  };

  let sidePanel = null;

  if (isSidePanelMounted) {
    sidePanel = ReactDOM.createPortal(
      <React.Fragment>
        <FocusTrap focusTrapOptions={focusTrapOptions}>
          <Dialog
            handleAnimationEnd={handleAnimationEnd}
            width={width}
            ref={refSidePanel}
            header={HeaderExtracted}
            {...moreProps}
            offsetY={offsetScroll}
            refHeader={refHeader}
          >
            {children}
          </Dialog>
        </FocusTrap>
        {OverlayExtracted ? React.cloneElement(OverlayExtracted, { ...OverlayExtracted.props, onClose }) : null}
      </React.Fragment>,
      document.body
    );
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

export default SidePanel;
