import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import Overlay from "@paprika/overlay";
import { zValue } from "@paprika/stylers/lib/helpers";
import { extractChildren } from "@paprika/helpers";
import FocusLock from "./components/FocusLock";
import * as sc from "./Modal.styles";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export const ModalContext = React.createContext({});

const Modal = props => {
  const { a11yText, isOpen, onClose, onAfterClose, onAfterOpen, size, zIndex, ...moreProps } = props;
  const [ariaLabel, setAriaLabel] = React.useState();

  const updateAriaLabel = React.useCallback(ariaLabel => {
    setAriaLabel(ariaLabel);
  }, []);

  const contextValue = {
    a11yText,
    isOpen,
    onClose,
    updateAriaLabel,
  };

  const { "Modal.FocusLock": focusLockExtracted, "Modal.Overlay": overlayExtracted, children } = extractChildren(
    moreProps.children,
    ["Modal.FocusLock", "Modal.Overlay"]
  );

  const focusLockProps = focusLockExtracted ? focusLockExtracted.props : {};
  const overlayProps = overlayExtracted ? overlayExtracted.props : {};

  const focusLockOptions = {
    as: sc.FocusLock,
    lockProps: { size },
    ...(focusLockProps || {}),
  };

  return (
    <Overlay
      data-pka-anchor="modal.overlay"
      isOpen={isOpen}
      onClose={onClose}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      zIndex={zIndex}
      {...overlayProps}
      focusLockOptions={focusLockOptions}
    >
      {state => (
        <sc.Modal size={size} data-pka-anchor="modal.wrapper" {...moreProps}>
          <sc.Dialog state={state} role="dialog" aria-modal aria-label={ariaLabel} data-pka-anchor="modal">
            <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
          </sc.Dialog>
        </sc.Modal>
      )}
    </Overlay>
  );
};

Modal.types = {
  size: constants.defaultSize,
};

const propTypes = {
  /* Description of the Modal dialog for assistive technology */
  a11yText: PropTypes.string,

  /** The content for the Modal. */
  children: PropTypes.node.isRequired,

  /** Control the visibility of the modal */
  isOpen: PropTypes.bool.isRequired,

  /** Callback triggered when the modal needs to be closed */
  onClose: PropTypes.func,

  /** Callback once the modal has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback once the modal has been closed event */
  onAfterClose: PropTypes.func,

  /* Control the size (max-width) of the modal */
  size: PropTypes.oneOf([Modal.types.size.SMALL, Modal.types.size.MEDIUM, Modal.types.size.LARGE]),

  /** The z-index of the Takeover content */
  zIndex: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  onAfterClose: () => {},
  onAfterOpen: () => {},
  onClose: () => {},
  size: Modal.types.size.MEDIUM,
  zIndex: zValue(6),
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
Modal.Overlay = Overlay;

Modal.FocusLock = FocusLock;

export default Modal;
