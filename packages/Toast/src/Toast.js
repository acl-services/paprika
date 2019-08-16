import React from "react";
import PropTypes from "prop-types";

import CheckIcon from "@paprika/icon/lib/Check";
import CautionIcon from "@paprika/icon/lib/Caution";
import ExclamationCircleIcon from "@paprika/icon/lib/ExclamationCircle";
import InfoCircleIcon from "@paprika/icon/lib/InfoCircle";
import LockIcon from "@paprika/icon/lib/Lock";

import toastStyles, { contentStyles, IconStyled, CloseButtonStyled } from "./Toast.styles";

const propTypes = {
  /**
   * Will make this an "assertive" alert that will interrupt immediately.
   * Default behaviour is to be "polite" and wait until the user is idle.
   */
  ariaAlert: PropTypes.bool,

  /** Will automatically close after 1500ms (or longer if provided by autocloseTimeout) */
  autoclose: PropTypes.bool,

  /** Duration (in ms) before Toast will automaticall close (if autoclose is true) */
  autocloseTimeout: PropTypes.number,

  /** Content of the Toast */
  children: PropTypes.node,

  /** If the component should have a 'close' button */
  hasCloseButton: PropTypes.bool,

  /** How "controlled" toast is shown / hidden. */
  isOpen: PropTypes.bool,

  /** Callback that is executed after clicking the 'close' button */
  onClose: PropTypes.func,

  /** If the Toast is fixed to the top of the viewport */
  isSticky: PropTypes.bool,

  /** Determines the styling of the Toast */
  type: PropTypes.oneOf(["success", "warning", "error", "info", "locked", "visually-hidden"]),

  /** The z-index of the Toast */
  zIndex: PropTypes.number,
};

const defaultProps = {
  ariaAlert: false,
  autoclose: false,
  autocloseTimeout: 5000,
  children: null,
  hasCloseButton: true,
  isOpen: undefined,
  onClose: () => {},
  isSticky: false,
  type: "info",
  zIndex: 1006,
};

const minimumCloseTimeout = 1500;

const icons = {
  success: CheckIcon,
  warning: CautionIcon,
  error: ExclamationCircleIcon,
  info: InfoCircleIcon,
  locked: LockIcon,
  "visually-hidden": InfoCircleIcon,
};

function Toast(props) {
  const {
    ariaAlert,
    autoclose,
    autocloseTimeout,
    children,
    hasCloseButton,
    isOpen,
    onClose,
    isSticky,
    type,
    zIndex,
    ...moreProps
  } = props;

  const ariaLive = ariaAlert ? "assertive" : "polite";
  const [shouldShowToast, setShouldShowToast] = React.useState(isOpen === undefined ? true : isOpen);
  const timerRef = React.useRef(null);

  function handleClose() {
    clearTimeout(timerRef.current);
    if (isOpen === undefined) setShouldShowToast(false);
    onClose();
  }

  function startTimer() {
    const newTimer = setTimeout(() => {
      handleClose();
    }, Math.max(autocloseTimeout, minimumCloseTimeout));

    timerRef.current = newTimer;
  }

  const memoizedStartTimer = React.useCallback(startTimer, []);

  React.useEffect(() => {
    if (autoclose) {
      memoizedStartTimer();
      return () => clearTimeout(timerRef.current);
    }
  }, [autoclose, memoizedStartTimer]);

  React.useEffect(() => {
    if (isOpen === undefined) return;
    if (isOpen !== shouldShowToast && !autoclose) setShouldShowToast(isOpen);
  }, [isOpen, shouldShowToast, autoclose]);

  if (!shouldShowToast) return null;

  return (
    <div
      aria-live={ariaLive}
      css={toastStyles}
      hasCloseButton={hasCloseButton}
      isSticky={isSticky}
      role="alert"
      style={{ zIndex }}
      type={type}
      {...moreProps}
    >
      <IconStyled as={icons[type]} type={type} />
      <div css={contentStyles}>{children}</div>
      {hasCloseButton ? <CloseButtonStyled onClick={handleClose} size="small" /> : null}
    </div>
  );
}

Toast.displayName = "Toast";

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default Toast;
