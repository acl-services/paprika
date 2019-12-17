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
  buttonSize: PropTypes.oneOf(ShirtSizes.DEFAULT),
  /** Children should be a render prop in the form of a function to display trigger */
  children: PropTypes.node,
  confirmButtonType: PropTypes.oneOf([Button.Kinds.PRIMARY, Button.Kinds.DESTRUCTIVE]),
  confirmLabel: PropTypes.string.isRequired,
  body: PropTypes.node,
  heading: PropTypes.string,
  defaultIsOpen: PropTypes.bool,
  isPending: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
};

const defaultProps = {
  buttonSize: ShirtSizes.MEDIUM,
  children: null,
  confirmButtonType: Button.Kinds.DESTRUCTIVE,
  defaultIsOpen: false,
  body: null,
  heading: null,
  isPending: false,
  onClose: () => {},
};

const Confirmation = props => {
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const {
    heading,
    buttonSize,
    children,
    confirmButtonType,
    confirmLabel,
    body,
    defaultIsOpen,
    isPending,
    onConfirm,
    onClose,
    ...moreProps
  } = props;
  const confirmButtonRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const confirmId = React.useRef(uuid()).current;
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

  const handleCloseConfirm = () => {
    if (isConfirmOpen) {
      setIsConfirmOpen(false);
      // being called repeatedly by popoverclose and cancel button?
      console.log("calling close confirm");
      setTimeout(onClose, 250);
    }
  };

  const handleOnConfirm = () => {
    onConfirm(handleCloseConfirm);
  };

  const renderTrigger = () => {
    // wrapping the returned item in a function to avoid needing to tab twice
    // https://github.com/acl-services/paprika/issues/126
    return () =>
      React.cloneElement(children, {
        isConfirmOpen,
        onOpenConfirm: handleOpenConfirm,
        triggerRef,
        confirmId,
      });
  };

  const I18n = useI18n();

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
              isPending={isPending}
              isSemantic={false}
              ref={confirmButtonRef}
              kind={confirmButtonType}
              size={buttonSize}
              onClick={handleOnConfirm}
            >
              {confirmLabel}
            </Button>
            <Button
              isDisabled={isPending}
              isSemantic={false}
              kind={Button.Kinds.MINOR}
              size={buttonSize}
              onClick={handleCloseConfirm}
            >
              {I18n.t("actions.cancel")}
            </Button>
          </div>
        </div>
      </Popover.Card>
    </Popover.Content>
  );

  return (
    <Popover key={popoverKey} isOpen={isConfirmOpen} onClose={handleCloseConfirm} {...moreProps}>
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
