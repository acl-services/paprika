import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import FocusTrap from "focus-trap-react";
import EscListener from "./components/EscListener";
import Wrapper from "./components/Wrapper";
import { animationDuration } from "./tokens";

const propTypes = {
  /** Control the visibility of the takeover */
  isOpen: PropTypes.bool.isRequired,

  /** Callback triggered when the takeover needs to be close */
  onClose: PropTypes.func,

  /** Callback once the takeover has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback once the takeover has been closed event */
  onAfterClose: PropTypes.func,

  /** Render the takeover inline */
  isInline: PropTypes.bool,
};

const defaultProps = {
  isInline: false,
  onAfterClose: () => {},
  onClose: () => {},
  onAfterOpen: () => {},
};

const Portal = ({ children, active }) => (active ? ReactDOM.createPortal(children, document.body) : React.Fragment);

const Takeover = ({ isOpen, onClose, isInline, onAfterClose, onAfterOpen }) => {
  const refWrapper = React.useRef(null);

  function handleTransitionEnter(node) {
    // https://github.com/reactjs/react-transition-group/blob/6dbadb594c7c2a2f15bc47afc6b4374cfd73c7c0/src/CSSTransition.js#L44
    node.scrollTop;
  }

  return (
    <Portal active={!isInline}>
      {isOpen && <EscListener on={onClose} />}
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
          <FocusTrap active={!isInline} focusTrapOptions={{ fallbackFocus: () => document.createElement("div") }}>
            <Wrapper ref={refWrapper} state={state}>
              111
            </Wrapper>
          </FocusTrap>
        )}
      </Transition>
    </Portal>
  );
};

Takeover.propTypes = propTypes;
Takeover.defaultProps = defaultProps;

export default Takeover;
