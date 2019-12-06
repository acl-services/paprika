import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import FocusTrap from "focus-trap-react";
import LockBodyScroll from "@paprika/helpers/lib/components/LockBodyScroll";
import Portal from "@paprika/helpers/lib/components/Portal";
import tokens from "@paprika/tokens";
import Wrapper from "./Wrapper";
import Backdrop from "./Backdrop";

const propTypes = {
  className: PropTypes.string,
  backdropClassName: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func,
  hasBackdrop: PropTypes.bool,
  onClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,
  focusTrapOptions: PropTypes.shape({
    // properties copy from https://github.com/davidtheclark/focus-trap

    /** A function that will be called when the focus trap activates. */
    onActivate: PropTypes.func,
    /** A function that will be called when the focus trap deactivates */
    onDeactivate: PropTypes.func,

    /**
     * By default, when a focus trap is activated the first element in the
     * focus trap's tab order will receive focus. With this option you can
     * specify a different element to receive that initial focus.
     */
    initialFocus: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func, HTMLElement]),

    /**
     * By default, an error will be thrown if the focus trap contains no
     * elements in its tab order. With this option you can specify a
     * fallback element to programmatically receive focus if no other
     * tabbable elements are found. For example, you may want a popover's
     * `<div>` to receive focus if the popover's content includes no
     * tabbable elements. *Make sure the fallback element has a negative
     * `tabindex` so it can be programmatically focused.*
     */
    fallbackFocus: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func, HTMLElement]),

    /**
     * Default: `true`. If `false`, when the trap is deactivated,
     * focus will *not* return to the element that had focus before activation.
     */
    returnFocusOnDeactivate: PropTypes.bool,

    /**
     * By default, focus trap on deactivation will return to the element
     * that was focused before activation.
     */
    setReturnFocus: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func, HTMLElement]),

    /**
     * Default: `true`. If `false`, the `Escape` key will not trigger
     * deactivation of the focus trap. This can be useful if you want
     * to force the user to make a decision instead of allowing an easy
     * way out.
     */
    escapeDeactivates: PropTypes.bool,

    /**
     * Default: `false`. If `true`, a click outside the focus trap will
     * deactivate the focus trap and allow the click event to do its thing.
     */
    clickOutsideDeactivates: PropTypes.bool,
  }),
};

const defaultProps = {
  className: null,
  backdropClassName: null,
  children: () => {},
  hasBackdrop: true,
  onClose: () => {},
  onAfterOpen: () => {},
  onAfterClose: () => {},
  focusTrapOptions: {},
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
    focusTrapOptions,
    ...moreProps
  } = props;

  function handleTransitionEnter(node) {
    // https://github.com/reactjs/react-transition-group/blob/6dbadb594c7c2a2f15bc47afc6b4374cfd73c7c0/src/CSSTransition.js#L44
    // eslint-disable-next-line no-unused-expressions
    node.scrollTop;
  }

  const _focusTrapOptions = {
    fallbackFocus: () => document.createElement("div"),
    ...focusTrapOptions,
  };

  function handleEscKey(event) {
    if (event.key === "Escape" && isOpen) {
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
          timeout={+tokens.overlay.animationDuration}
          onEnter={handleTransitionEnter}
          onEntered={onAfterOpen}
          onExited={onAfterClose}
        >
          {state => (
            <Wrapper {...moreProps} onKeyDown={handleEscKey}>
              {hasBackdrop && <Backdrop className={backdropClassName} state={state} onClick={onClose} />}
              <FocusTrap focusTrapOptions={_focusTrapOptions}>{children && children(state)}</FocusTrap>
            </Wrapper>
          )}
        </Transition>
      </Portal>
    </>
  );
};

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default Overlay;
