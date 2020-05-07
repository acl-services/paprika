import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import useI18n from "@paprika/l10n/lib/useI18n";
import Popover from "@paprika/popover";
import TriggerButton from "./components/TriggerButton";
import { confirmStyles, confirmBodyStyles, confirmFooterStyles } from "./Confirmation.styles";

const propTypes = {
  /** Content of the popover confirmation */
  body: PropTypes.node,
  /** Size of the button */
  buttonSize: PropTypes.oneOf(ShirtSizes.DEFAULT),
  children: PropTypes.node,
  /** Determine the styling of the confirm button */
  confirmButtonType: PropTypes.oneOf([Button.Kinds.PRIMARY, Button.Kinds.DESTRUCTIVE]),
  /** Label for the confirm button  */
  confirmLabel: PropTypes.string.isRequired,
  /** If the popover is open by default */
  defaultIsOpen: PropTypes.bool,
  /** Heading for the popover confirmation */
  heading: PropTypes.string,
  /** If the confirm button should render in a pending state (with a spinner icon) */
  isPending: PropTypes.bool,
  /** Callback when cancel button is clicked */
  onClose: PropTypes.func,
  /** Callback when confirm button is clicked */
  onConfirm: PropTypes.func.isRequired,
};

const defaultProps = {
  body: null,
  buttonSize: ShirtSizes.MEDIUM,
  children: null,
  confirmButtonType: Button.Kinds.DESTRUCTIVE,
  defaultIsOpen: false,
  heading: null,
  isPending: false,
  onClose: () => {},
};

const Confirmation = props => {
  const {
    body,
    buttonSize,
    children,
    confirmButtonType,
    confirmLabel,
    defaultIsOpen,
    heading,
    isPending,
    onClose,
    onConfirm,
    ...moreProps
  } = props;

  const [isConfirmOpen, setIsConfirmOpen] = React.useState(null);
  const confirmButtonRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const confirmId = React.useRef(uuid()).current;
  const I18n = useI18n();

  const popoverOffset = 4;
  let popoverKey = uuid();

  const focusConfirmButton = () => {
    if (confirmButtonRef.current) confirmButtonRef.current.focus();
  };

  const handleOpenConfirm = () => {
    setIsConfirmOpen(true);
    setTimeout(focusConfirmButton, 250);
  };

  React.useEffect(() => {
    if (defaultIsOpen && !isConfirmOpen) {
      handleOpenConfirm();
    }
  }, [confirmButtonRef, defaultIsOpen]);

  React.useEffect(() => {
    popoverKey = uuid();
  }, [isPending]);

  React.useEffect(() => {
    if (isConfirmOpen === false) {
      if (triggerRef.current) triggerRef.current.focus();
      setTimeout(onClose, 250);
    }
  }, [isConfirmOpen]);

  const handleCloseConfirm = () => {
    setIsConfirmOpen(false);
  };

  const handleOnConfirm = () => {
    onConfirm(handleCloseConfirm);
  };

  const renderTrigger = () => {
    // wrapping the returned item in a function to avoid wrapping children in
    // a RawButton and needing to tab twice
    // https://github.com/acl-services/paprika/issues/126
    return () =>
      React.cloneElement(children, {
        isConfirmOpen,
        onOpenConfirm: handleOpenConfirm,
        triggerRef,
        confirmId,
      });
  };

  const popoverContent = (
    <Popover.Content id={confirmId}>
      <Popover.Card>
        <div css={confirmStyles}>
          {heading && (
            <Heading displayLevel={5} level={2}>
              {heading}
            </Heading>
          )}
          {body && <div css={confirmBodyStyles}>{body}</div>}
          <div css={confirmFooterStyles}>
            <Button
              canPropagate={false}
              data-pka-anchor="confirmation.confirm-button"
              isPending={isPending}
              isSemantic={false}
              kind={confirmButtonType}
              onClick={handleOnConfirm}
              ref={confirmButtonRef}
              size={buttonSize}
            >
              {confirmLabel}
            </Button>
            <Button
              canPropagate={false}
              data-pka-anchor="confirmation.cancel-button"
              isDisabled={isPending}
              isSemantic={false}
              kind={Button.Kinds.MINOR}
              onClick={handleCloseConfirm}
              size={buttonSize}
            >
              {I18n.t("actions.cancel")}
            </Button>
          </div>
        </div>
      </Popover.Card>
    </Popover.Content>
  );

  return (
    <Popover
      data-pka-anchor="confirmation"
      isOpen={isConfirmOpen}
      key={popoverKey}
      offset={popoverOffset}
      onClose={handleCloseConfirm}
      {...moreProps}
    >
      {children && <Popover.Trigger>{renderTrigger()}</Popover.Trigger>}
      {popoverContent}
    </Popover>
  );
};

Confirmation.displayName = "Confirmation";
Confirmation.propTypes = propTypes;
Confirmation.defaultProps = defaultProps;
Confirmation.TriggerButton = TriggerButton;

export default Confirmation;
