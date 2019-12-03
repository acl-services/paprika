import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import FocusTrapLibrary from "focus-trap-react";
import LockBodyScroll from "@paprika/helpers/lib/components/LockBodyScroll";
import Portal from "@paprika/helpers/lib/components/Portal";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import * as styled from "./Modal.styles";
import { animationDuration } from "./helpers/tokens";

const propTypes = {
  /** The content for the Modal. */
  children: PropTypes.node.isRequired,

  /** Control the visibility of the modal */
  isOpen: PropTypes.bool.isRequired,

  /** Callback triggered when the modal needs to be close */
  onClose: PropTypes.func,

  /** Callback once the modal has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback once the modal has been closed event */
  onAfterClose: PropTypes.func,
};

const defaultProps = {
  onAfterClose: () => {},
  onClose: () => {},
  onAfterOpen: () => {},
};

const Modal = props => {
  const { isOpen, onClose, onAfterClose, onAfterOpen, ...moreProps } = props;

  function handleTransitionEnter(node) {
    // https://github.com/reactjs/react-transition-group/blob/6dbadb594c7c2a2f15bc47afc6b4374cfd73c7c0/src/CSSTransition.js#L44
    // eslint-disable-next-line no-unused-expressions
    node.scrollTop;
  }

  const {
    "Modal.FocusTrap": focusTrapExtracted,
    "Modal.Header": headerExtracted,
    "Modal.Content": contentExtracted,
    children,
  } = extractChildren(moreProps.children, ["Modal.FocusTrap", "Modal.Header", "Modal.Content"]);

  const extendedFocusTrapOptions = focusTrapExtracted ? focusTrapExtracted.props : {};

  const focusTrapOptions = {
    fallbackFocus: () => document.createElement("div"),
    ...extendedFocusTrapOptions,
  };

  function handleEscKey(event) {
    if (event.key === "Escape") {
      event.stopPropagation();

      onClose();
    }
  }

  return (
    <>
      {isOpen && <LockBodyScroll />}
      <Portal>
        <Transition
          mountOnEnter
          unmountOnExit
          in={isOpen}
          timeout={animationDuration}
          onEnter={handleTransitionEnter}
          onEntered={onAfterOpen}
          onExited={onAfterClose}
        >
          {state => (
            <FocusTrapLibrary focusTrapOptions={focusTrapOptions}>
              <styled.Wrapper
                state={state}
                role="dialog"
                tabIndex="-1"
                onKeyDown={handleEscKey}
                data-pka-anchor="modal"
              >
                {headerExtracted && <styled.Header {...headerExtracted.props} onClose={onClose} />}
                {contentExtracted && (
                  <styled.ContentWrapper role="region" tabIndex="0">
                    {contentExtracted}
                  </styled.ContentWrapper>
                )}
                {children}
              </styled.Wrapper>
            </FocusTrapLibrary>
          )}
        </Transition>
      </Portal>
    </>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
