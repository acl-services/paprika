import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import FocusTrapLibrary from "focus-trap-react";
import styled from "styled-components";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import LockBodyScroll from "./components/LockBodyScroll";
import { animationDuration } from "./tokens";
import extractChildren from "./helpers/extractChildren";

const propTypes = {
  /** The content for the Takeover. */
  children: PropTypes.node.isRequired,

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

const Portal = ({ children, active }) =>
  active ? ReactDOM.createPortal(children, document.body) : <React.Fragment>{children}</React.Fragment>;

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled(Header)`
  flex: none;
`;

const ContentWrapper = styled.div`
  overflow-y: auto;
  flex: 1 1 auto;
`;

const Takeover = ({ isOpen, onClose, isInline, onAfterClose, onAfterOpen, ...props }) => {
  function handleTransitionEnter(node) {
    // https://github.com/reactjs/react-transition-group/blob/6dbadb594c7c2a2f15bc47afc6b4374cfd73c7c0/src/CSSTransition.js#L44
    node.scrollTop;
  }

  const {
    "Takeover.FocusTrap": focusTrapExtracted,
    "Takeover.Header": headerExtracted,
    "Takeover.Content": contentExtracted,
    children,
  } = extractChildren(props.children, ["Takeover.FocusTrap", "Takeover.Header", "Takeover.Content"]);

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
      <Portal active={!isInline}>
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
            <FocusTrapLibrary active={!isInline} focusTrapOptions={focusTrapOptions}>
              <StyledWrapper
                state={state}
                role="dialog"
                tabIndex="-1"
                onKeyDown={handleEscKey}
                data-pka-anchor="takeover"
              >
                {headerExtracted && <StyledHeader {...headerExtracted.props} onClose={onClose} />}
                {contentExtracted && <ContentWrapper tabIndex="0">{contentExtracted}</ContentWrapper>}
                {children}
              </StyledWrapper>
            </FocusTrapLibrary>
          )}
        </Transition>
      </Portal>
    </>
  );
};

Takeover.propTypes = propTypes;
Takeover.defaultProps = defaultProps;

export default Takeover;
