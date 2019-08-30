import React from "react";
import PropTypes from "prop-types";

import CheckIcon from "@paprika/icon/lib/Check";
import CautionIcon from "@paprika/icon/lib/Caution";
import ExclamationCircleIcon from "@paprika/icon/lib/ExclamationCircle";
import InfoCircleIcon from "@paprika/icon/lib/InfoCircle";
import LockIcon from "@paprika/icon/lib/Lock";

import Kinds from "./ToastKinds";

import toastStyles, { contentStyles, IconStyled, CloseButtonStyled } from "./Toast.styles";

const propTypes = {
  /**
   * Will make this an "assertive" alert that will interrupt immediately.
   * Default behaviour is to be "polite" and wait until the user is idle.
   */
  ariaAlert: PropTypes.bool,

  /** Will automatically close after 1500ms (or longer if provided by autoCloseDelay) */
  canAutoClose: PropTypes.bool,

  /** Duration (in ms) before Toast will automaticall close (if canAutoClose is true) */
  autoCloseDelay: PropTypes.number,

  /** Content of the Toast */
  children: PropTypes.node,

  /** If the component should have a 'close' button */
  hasCloseButton: PropTypes.bool,

  /** How "controlled" toast is shown / hidden. */
  isOpen: PropTypes.bool,

  /** Callback that is executed after clicking the 'close' button */
  onClose: PropTypes.func,

  /** If the Toast is fixed to the top of the viewport */
  isFixed: PropTypes.bool,

  /** Determines the styling of the Toast */
  kind: PropTypes.oneOf([Kinds.SUCCESS, Kinds.WARNING, Kinds.ERROR, Kinds.INFO, Kinds.LOCKED, Kinds.VISUALLY_HIDDEN]),

  /** The z-index of the Toast */
  zIndex: PropTypes.number,
};

const defaultProps = {
  ariaAlert: false,
  canAutoClose: false,
  autoCloseDelay: 1500,
  children: null,
  hasCloseButton: true,
  isOpen: undefined,
  onClose: () => {},
  isFixed: false,
  kind: Kinds.INFO,
  zIndex: undefined,
};

const minimumCloseTimeout = 1500;

const zIndexPlaceholder = 1;

const icons = {
  [Kinds.SUCCESS]: CheckIcon,
  [Kinds.WARNING]: CautionIcon,
  [Kinds.ERROR]: ExclamationCircleIcon,
  [Kinds.INFO]: InfoCircleIcon,
  [Kinds.LOCKED]: LockIcon,
};

function Toast(props) {
  const {
    ariaAlert,
    canAutoClose,
    autoCloseDelay,
    children,
    hasCloseButton,
    isOpen,
    onClose,
    isFixed,
    kind,
    zIndex,
    ...moreProps
  } = props;

  const ariaLive = ariaAlert ? "assertive" : "polite";
  const [isToastOpen, setIsToastOpen] = React.useState(isOpen === undefined ? true : isOpen);
  const timerRef = React.useRef(null);
  const deafultZIndex = isFixed ? zIndexPlaceholder : null;

  const memoizedStartTimer = React.useCallback(() => {
    function handleDelayedClose() {
      clearTimeout(timerRef.current);
      if (isOpen === undefined) setIsToastOpen(false);
      onClose();
    }

    timerRef.current = setTimeout(handleDelayedClose, Math.max(autoCloseDelay, minimumCloseTimeout));
  }, [autoCloseDelay, isOpen, onClose]);

  function handleClose() {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isOpen === undefined) setIsToastOpen(false);
    onClose();
  }

  React.useEffect(() => {
    if (canAutoClose) {
      memoizedStartTimer();
      return () => clearTimeout(timerRef.current);
    }
  }, [canAutoClose, memoizedStartTimer]);

  React.useEffect(() => {
    if (isOpen === undefined) return;
    if (isOpen !== isToastOpen && !canAutoClose) setIsToastOpen(isOpen);
  }, [isOpen, isToastOpen, canAutoClose]);

  if (!isToastOpen) return null;

  return (
    <div
      aria-live={ariaLive}
      css={toastStyles}
      hasCloseButton={hasCloseButton}
      isFixed={isFixed}
      role="alert"
      style={{ zIndex: zIndex !== undefined ? zIndex : deafultZIndex }}
      kind={kind}
      {...moreProps}
    >
      {kind === Kinds.VISUALLY_HIDDEN ? null : <IconStyled as={icons[kind]} kind={kind} />}
      <div css={contentStyles}>{children}</div>
      {hasCloseButton && kind !== Kinds.VISUALLY_HIDDEN ? (
        <CloseButtonStyled onClick={handleClose} size="small" />
      ) : null}
    </div>
  );
}

Toast.displayName = "Toast";

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default Toast;
