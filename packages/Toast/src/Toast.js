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

import toastStyles, { contentStyles, IconStyled, CloseButtonStyled } from "./Toast.styles";

const icons = {
  [types.toastKinds.SUCCESS]: CheckIcon,
  [types.toastKinds.WARNING]: CautionIcon,
  [types.toastKinds.ERROR]: ExclamationCircleIcon,
  [types.toastKinds.INFO]: InfoCircleIcon,
  [types.toastKinds.LOCKED]: LockIcon,
};

const minimumCloseTimeout = 1500;
const renderTimeout = 20;

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

  const [isToastOpen, setIsToastOpen] = React.useState(isOpen === undefined ? true : isOpen);
  const [shouldRender, setShouldRender] = React.useState(!isPolite);
  const autoCloseTimer = React.useRef(null);
  const renderTimer = React.useRef(null);
  const ariaRole = isPolite ? "status" : "alert";
  const defaultZIndex = isFixed ? zValue(7) : null;
  const isVisuallyHidden = kind === Toast.types.kind.VISUALLY_HIDDEN;

  const memoizedStartAutoCloseTimer = React.useCallback(() => {
    function handleDelayedClose() {
      clearTimeout(autoCloseTimer.current);
      if (isOpen === undefined) setIsToastOpen(false);
      onClose();
    }

    autoCloseTimer.current = setTimeout(handleDelayedClose, Math.max(autoCloseDelay, minimumCloseTimeout));
  }, [autoCloseDelay, isOpen, onClose]);

  const memoizedStartRenderTimer = React.useCallback(() => {
    function handleDelayedRender() {
      clearTimeout(renderTimer.current);
      setShouldRender(true);
    }

    renderTimer.current = setTimeout(handleDelayedRender, renderTimeout);
  }, [isPolite]);

  function handleClose() {
    if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
    if (renderTimer.current) clearTimeout(renderTimer.current);

    if (isOpen === undefined) {
      setIsToastOpen(false);
      if (isPolite) setShouldRender(false);
    }
    onClose();
  }

  function renderContent() {
    if (!shouldRender) return null;

    return (
      <>
        {!isVisuallyHidden && <IconStyled as={icons[kind]} kind={kind} />}
        <div css={contentStyles}>{children}</div>
        {hasCloseButton && !isVisuallyHidden && (
          <CloseButtonStyled isSemantic={false} onClick={handleClose} size={types.SMALL} />
        )}
      </>
    );
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
        zIndex={zIndex || defaultZIndex}
        ref={toastRef}
        {...moreProps}
      >
        {renderContent()}
      </div>
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
    if (isPolite && isToastOpen) {
      memoizedStartRenderTimer();
      return () => {
        clearTimeout(renderTimer.current);
      };
    }
  }, [isPolite, isToastOpen, memoizedStartRenderTimer]);

  React.useEffect(() => {
    if (isPolite && !isOpen) {
      setShouldRender(false);
    }
  }, [isPolite, isOpen]);

  React.useEffect(() => {
    if (isOpen === undefined) return;
    if (isOpen !== isToastOpen && !canAutoClose && !isVisuallyHidden) setIsToastOpen(isOpen);
  }, [isOpen, isToastOpen, canAutoClose, isVisuallyHidden]);

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
  kind: PropTypes.oneOf([
    Toast.types.kind.SUCCESS,
    Toast.types.kind.WARNING,
    Toast.types.kind.ERROR,
    Toast.types.kind.INFO,
    Toast.types.kind.LOCKED,
    Toast.types.kind.VISUALLY_HIDDEN,
  ]),

  /** Callback that is executed after clicking the 'close' button */
  onClose: PropTypes.func,

  /** The z-index of the Toast */
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
  zIndex: null,
};

Toast.displayName = "Toast";
Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default Toast;
