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
  children: PropTypes.func,
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
  const confirmId = React.useRef(uuid());

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

  const triggerProps = {
    isConfirmOpen,
    handleOpenConfirm,
  };

  const handleCloseConfirm = () => {
    if (isConfirmOpen) {
      setIsConfirmOpen(false);
      if (triggerRef.current) triggerRef.current.focus();
      setTimeout(onClose, 250);
    }
  };

  const handleOnConfirm = () => {
    onConfirm(handleCloseConfirm);
  };

  const renderTrigger = triggerComponent => {
    // const triggerComponent = renderTriggerFunction(triggerProps);
    // wrapping the returned item in a function to avoid needing to tab twice
    // https://github.com/acl-services/paprika/issues/126
    return () =>
      React.cloneElement(triggerComponent, {
        triggerRef,
        confirmId: confirmId.current,
      });
  };

  const I18n = useI18n();

  const popoverContent = (
    <Popover.Content id={confirmId.current}>
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
            {!isPending ? (
              <Button
                isDisabled={isPending}
                isSemantic={false}
                kind={Button.Kinds.MINOR}
                size={buttonSize}
                onClick={handleCloseConfirm}
              >
                {I18n.t("actions.cancel")}
              </Button>
            ) : null}
          </div>
        </div>
      </Popover.Card>
    </Popover.Content>
  );

  // note: In future could support a node instead of just function
  const triggerComponent = children ? children(triggerProps) : null;

  return (
    <Popover isOpen={isConfirmOpen} onClose={handleCloseConfirm} {...moreProps}>
      {triggerComponent && <Popover.Trigger>{renderTrigger(triggerComponent)}</Popover.Trigger>}
      {popoverContent}
    </Popover>
  );
};

Confirmation.displayName = "Confirmation";
Confirmation.propTypes = propTypes;
Confirmation.defaultProps = defaultProps;
Confirmation.TriggerButton = TriggerButton;

export default Confirmation;
