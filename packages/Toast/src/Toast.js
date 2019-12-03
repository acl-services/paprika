import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import CheckIcon from "@paprika/icon/lib/Check";
import CautionIcon from "@paprika/icon/lib/Caution";
import ExclamationCircleIcon from "@paprika/icon/lib/ExclamationCircle";
import InfoCircleIcon from "@paprika/icon/lib/InfoCircle";
import LockIcon from "@paprika/icon/lib/Lock";
import Portal from "@paprika/helpers/lib/components/Portal";

import Kinds from "./ToastKinds";

import toastStyles, { contentStyles, IconStyled, CloseButtonStyled } from "./Toast.styles";

const propTypes = {
  /** Duration (in ms) before Toast will automaticall close (if canAutoClose is true) */
  autoCloseDelay: PropTypes.number,

  /** Will automatically close after 1500ms (or longer if provided by autoCloseDelay) */
  canAutoClose: PropTypes.bool,

  /** Content of the Toast */
  children: PropTypes.node,

  /** If the component should have a 'close' button */
  hasCloseButton: PropTypes.bool,

  /** How "controlled" toast is shown / hidden. */
  isOpen: PropTypes.bool,

  /** If the Toast is fixed to the top of the viewport. This will render the Toast as a Portal. */
  isFixed: PropTypes.bool,

  /** A11y: If the toast is polite or not. If false, then the toast will be assertive. */
  isPolite: PropTypes.bool,

  /** Determines the styling of the Toast */
  kind: PropTypes.oneOf(Kinds.ALL),

  /** Callback that is executed after clicking the 'close' button */
  onClose: PropTypes.func,

  /** The z-index of the Toast */
  zIndex: PropTypes.number,
};

const defaultProps = {
  canAutoClose: false,
  autoCloseDelay: 1500,
  children: null,
  hasCloseButton: true,
  isOpen: undefined,
  isFixed: false,
  isPolite: true,
  kind: Kinds.INFO,
  onClose: () => {},
  zIndex: null,
};

const minimumCloseTimeout = 1500;

const zIndexPlaceholder = 10;

const icons = {
  [Kinds.SUCCESS]: CheckIcon,
  [Kinds.WARNING]: CautionIcon,
  [Kinds.ERROR]: ExclamationCircleIcon,
  [Kinds.INFO]: InfoCircleIcon,
  [Kinds.LOCKED]: LockIcon,
};

function Toast(props) {
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
    zIndex,
    ...moreProps
  } = props;

  const ariaRole = isPolite ? "status" : "alert";
  const [isToastOpen, setIsToastOpen] = React.useState(isOpen === undefined ? true : isOpen);
  const timerRef = React.useRef(null);
  const defaultZIndex = isFixed ? zIndexPlaceholder : null;

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

  function renderToast() {
    return (
      <div
        css={toastStyles}
        data-pka-anchor="toast"
        hasCloseButton={hasCloseButton}
        isFixed={isFixed}
        role={ariaRole}
        kind={kind}
        zIndex={zIndex !== null ? zIndex : defaultZIndex}
        {...moreProps}
      >
        {kind === Kinds.VISUALLY_HIDDEN ? null : <IconStyled as={icons[kind]} kind={kind} />}
        <div css={contentStyles}>{children}</div>
        {hasCloseButton && kind !== Kinds.VISUALLY_HIDDEN ? (
          <CloseButtonStyled onClick={handleClose} size={ShirtSizes.SMALL} />
        ) : null}
      </div>
    );
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

  if (isFixed) {
    return <Portal>{renderToast()}</Portal>;
  }

  return renderToast();
}

Toast.displayName = "Toast";

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default Toast;
