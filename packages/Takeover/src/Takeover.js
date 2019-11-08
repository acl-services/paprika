import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import FocusTrapLibrary from "focus-trap-react";
import LockBodyScroll from "@paprika/helpers/lib/components/LockBodyScroll";
import * as styles from "./Takeover.styles";
import Header from "./components/Header";
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

const Takeover = props => {
  const { isOpen, onClose, isInline, onAfterClose, onAfterOpen, ...moreProps } = props;

  function handleTransitionEnter(node) {
    // https://github.com/reactjs/react-transition-group/blob/6dbadb594c7c2a2f15bc47afc6b4374cfd73c7c0/src/CSSTransition.js#L44
    // eslint-disable-next-line no-unused-expressions
    node.scrollTop;
  }

  const {
    "Takeover.FocusTrap": focusTrapExtracted,
    "Takeover.Header": headerExtracted,
    "Takeover.Content": contentExtracted,
    children,
  } = extractChildren(moreProps.children, ["Takeover.FocusTrap", "Takeover.Header", "Takeover.Content"]);

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
              <div
                css={styles.wrapper}
                state={state}
                role="dialog"
                tabIndex="-1"
                onKeyDown={handleEscKey}
                data-pka-anchor="takeover"
              >
                {headerExtracted && <Header css={styles.header} {...headerExtracted.props} onClose={onClose} />}
                {contentExtracted && (
                  <div
                    role="region"
                    css={styles.contentWrapper}
                    tabIndex="0" // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
                  >
                    {contentExtracted}
                  </div>
                )}
                {children}
              </div>
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
