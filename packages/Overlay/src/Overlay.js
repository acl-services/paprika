import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import FocusLock from "react-focus-lock";
import LockBodyScroll from "@paprika/helpers/lib/components/LockBodyScroll";
import Portal from "@paprika/helpers/lib/components/Portal";
import tokens from "@paprika/tokens";
import * as sc from "./Overlay.styles";

const propTypes = {
  backdropClassName: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func,
  hasBackdrop: PropTypes.bool,
  onClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,
  focusLockOptions: PropTypes.shape({
    // properties copy from https://github.com/theKashey/react-focus-lock/blob/dee9b4c625eba0ca183fbda89005a5d09053086f/src/Lock.js#L160
    // see description for props here: https://github.com/theKashey/react-focus-lock/blob/dee9b4c625eba0ca183fbda89005a5d09053086f/interfaces.d.ts#L4

    children: PropTypes.node,
    disabled: PropTypes.bool,
    returnFocus: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    noFocusGuards: PropTypes.bool,

    allowTextSelection: PropTypes.bool,
    autoFocus: PropTypes.bool,
    persistentFocus: PropTypes.bool,

    group: PropTypes.string,
    className: PropTypes.string,

    whiteList: PropTypes.func,
    shards: PropTypes.arrayOf(PropTypes.any),

    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
    lockProps: PropTypes.object,

    onActivation: PropTypes.func,
    onDeactivation: PropTypes.func,

    sideCar: PropTypes.any,
  }),

  /** z-index of the Overlay wrapper */
  zIndex: PropTypes.number,
};

const defaultProps = {
  backdropClassName: null,
  children: () => {},
  hasBackdrop: true,
  onClose: () => {},
  onAfterOpen: () => {},
  onAfterClose: () => {},
  focusLockOptions: {},
  zIndex: null,
};

const Overlay = props => {
  const {
    backdropClassName,
    isOpen,
    children,
    hasBackdrop,
    onClose,
    onAfterOpen,
    onAfterClose,
    focusLockOptions,
    ...moreProps
  } = props;

  function handleTransitionEnter(node) {
    // https://github.com/reactjs/react-transition-group/blob/6dbadb594c7c2a2f15bc47afc6b4374cfd73c7c0/src/CSSTransition.js#L44
    // eslint-disable-next-line no-unused-expressions
    node.scrollTop;
  }

  function handleEscKey(event) {
    if (event.key === "Escape" && isOpen) {
      event.stopPropagation();

      onClose();
    }
  }

  const _focusLockOptions = {
    returnFocus: true,
    ...focusLockOptions,
  };

  return (
    <>
      {isOpen && <LockBodyScroll />}
      <Portal>
        <Transition
          mountOnEnter
          unmountOnExit
          in={isOpen}
          timeout={+tokens.overlay.animationDuration}
          onEnter={handleTransitionEnter}
          onEntered={onAfterOpen}
          onExited={onAfterClose}
        >
          {state => (
            <sc.Overlay data-pka-anchor="overlay" {...moreProps} onKeyDown={handleEscKey}>
              {hasBackdrop && (
                <sc.Backdrop
                  className={backdropClassName}
                  state={state}
                  onClick={onClose}
                  data-pka-anchor="overlay.backdrop"
                />
              )}
              <FocusLock disabled={state === "exiting" || state === "exited"} {..._focusLockOptions}>
                {children && children(state)}
              </FocusLock>
            </sc.Overlay>
          )}
        </Transition>
      </Portal>
    </>
  );
};

Overlay.displayName = "Overlay";
Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default Overlay;
