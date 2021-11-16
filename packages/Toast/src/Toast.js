import React from "react";
import PropTypes from "prop-types";
import { zValue } from "@paprika/stylers/lib/helpers";
import CheckIcon from "@paprika/icon/lib/Check";
import CautionIcon from "@paprika/icon/lib/ColoredCaution";
import ExclamationCircleIcon from "@paprika/icon/lib/ExclamationCircle";
import InfoCircleIcon from "@paprika/icon/lib/InfoCircle";
import LockIcon from "@paprika/icon/lib/Lock";
import Portal from "@paprika/helpers/lib/components/Portal";
import * as types from "./types";

import * as sc from "./Toast.styles";

const icons = {
  [types.toastKinds.SUCCESS]: CheckIcon,
  [types.toastKinds.WARNING]: CautionIcon,
  [types.toastKinds.ERROR]: ExclamationCircleIcon,
  [types.toastKinds.INFO]: InfoCircleIcon,
  [types.toastKinds.LOCKED]: LockIcon,
};

const minimumCloseTimeout = 1500;

const Toast = React.forwardRef((props, ref) => {
  const {
    autoCloseDelay,
    canAutoClose,
    children,
    hasCloseButton,
    isFixed,
    isOpen,
    isPolite,
    kind,
    onClose,
    renderDelay,
    zIndex,
    ...moreProps
  } = props;

  const toastRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      if (toastRef.current) {
        if (!moreProps.tabIndex) toastRef.current.setAttribute("tabindex", "-1");
        toastRef.current.focus();
      }
    },
  }));

  const isControlled = typeof isOpen !== "undefined";
  const [isToastOpen, setIsToastOpen] = React.useState(isControlled ? isOpen : true);
  const [shouldRender, setShouldRender] = React.useState(false);
  const autoCloseTimer = React.useRef(null);
  const renderTimer = React.useRef(null);
  const ariaRole = isPolite ? "status" : "alert";
  const defaultZIndex = isFixed ? zValue(7) : null;
  const isVisuallyHidden = kind === Toast.types.kind.VISUALLY_HIDDEN;

  const handleClose = React.useCallback(() => {
    if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
    if (renderTimer.current) clearTimeout(renderTimer.current);

    if (!isControlled) {
      setIsToastOpen(false);
    }

    onClose();
  }, [isControlled, onClose]);

  const memoizedStartAutoCloseTimer = React.useCallback(() => {
    function handleDelayedClose() {
      clearTimeout(autoCloseTimer.current);
      handleClose();
    }

    autoCloseTimer.current = setTimeout(handleDelayedClose, Math.max(autoCloseDelay, minimumCloseTimeout));
  }, [autoCloseDelay, handleClose]);

  const memoizedStartRenderTimer = React.useCallback(() => {
    function handleDelayedRender() {
      clearTimeout(renderTimer.current);
      setShouldRender(true);
    }

    renderTimer.current = setTimeout(handleDelayedRender, renderDelay);
  }, [renderDelay]);

  function renderContent() {
    if (!shouldRender) return null;

    return (
      <>
        {!isVisuallyHidden && <sc.IconStyled as={icons[kind]} kind={kind} aria-hidden />}
        <sc.Content>{children}</sc.Content>
        {hasCloseButton && !isVisuallyHidden && <sc.CloseButtonStyled isSemantic={false} onClick={handleClose} />}
      </>
    );
  }

  function renderToast() {
    return (
      <sc.Toast
        data-pka-anchor="toast"
        hasCloseButton={hasCloseButton}
        isFixed={isFixed}
        role={ariaRole}
        kind={kind}
        zIndex={zIndex || defaultZIndex}
        ref={toastRef}
        {...moreProps}
        shouldRender={shouldRender}
      >
        {renderContent()}
      </sc.Toast>
    );
  }

  React.useEffect(() => {
    if (canAutoClose || isVisuallyHidden) {
      memoizedStartAutoCloseTimer();
      return () => {
        clearTimeout(autoCloseTimer.current);
      };
    }
  }, [canAutoClose, isVisuallyHidden, memoizedStartAutoCloseTimer]);

  React.useEffect(() => {
    if (!isToastOpen) {
      setShouldRender(false);
    } else {
      memoizedStartRenderTimer();
      return () => {
        clearTimeout(renderTimer.current);
      };
    }
  }, [isToastOpen, memoizedStartRenderTimer]);

  React.useEffect(() => {
    if (isControlled) {
      setIsToastOpen(isOpen);
    }
  }, [isOpen, isControlled]);

  if (!isToastOpen) return null;

  if (isFixed) {
    return <Portal>{renderToast()}</Portal>;
  }

  return renderToast();
});

Toast.types = {
  kind: types.toastKinds,
  size: types.SMALL,
};

const propTypes = {
  /** Duration (in ms) before Toast will automatically close (if canAutoClose is true). */
  autoCloseDelay: PropTypes.number,

  /** Will automatically call onClose() after 5000ms (or longer if provided by autoCloseDelay). If uncontrolled, it will automatically close the Toast as well. */
  canAutoClose: PropTypes.bool,

  /** Content of the Toast. */
  children: PropTypes.node,

  /** If the component should have a 'close' button. */
  hasCloseButton: PropTypes.bool,

  /** How "controlled" Toast is shown / hidden. */
  isOpen: PropTypes.bool,

  /** If the Toast is fixed to the top of the viewport. This will render the Toast as a Portal. */
  isFixed: PropTypes.bool,

  /** A11y: If the Toast is polite (will wait until screen reader is finished before speaking) or assertive (will interrupt immediately). */
  isPolite: PropTypes.bool,

  /** Determines the styling of the Toast. */
  kind: PropTypes.oneOf([
    Toast.types.kind.SUCCESS,
    Toast.types.kind.WARNING,
    Toast.types.kind.ERROR,
    Toast.types.kind.INFO,
    Toast.types.kind.LOCKED,
    Toast.types.kind.VISUALLY_HIDDEN,
  ]),

  /** Callback that is executed after clicking the 'close' button. */
  onClose: PropTypes.func,

  /** Delay in ms before content of Toast is rendered (to improve UX with screen readers). */
  renderDelay: PropTypes.number,

  /** The z-index of the Toast. */
  zIndex: PropTypes.number,
};

const defaultProps = {
  canAutoClose: false,
  autoCloseDelay: 5000,
  children: null,
  hasCloseButton: true,
  isOpen: undefined,
  isFixed: false,
  isPolite: false,
  kind: Toast.types.kind.INFO,
  onClose: () => {},
  renderDelay: 20,
  zIndex: null,
};

Toast.displayName = "Toast";
Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default Toast;
