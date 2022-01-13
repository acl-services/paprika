import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import * as constants from "@paprika/constants/lib/Constants";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import { extractChildren, extractChildrenProps } from "@paprika/helpers";
import useI18n from "@paprika/l10n/lib/useI18n";
import Popover from "@paprika/popover";
import ConfirmationContentPropsCollector from "./ConfirmationContentPropsCollector";
import TriggerButton from "./components/TriggerButton";
import * as types from "./types";
import { confirmStyles, confirmBodyStyles, confirmFooterStyles } from "./Confirmation.styles";

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
  const [titleId] = React.useState(() => `confirmation-title_${uuidv4()}`);
  const [descriptionId] = React.useState(() => `confirmation-desc_${uuidv4()}`);
  const I18n = useI18n();

  const popoverOffset = 4;
  let popoverKey = uuidv4();

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
    popoverKey = uuidv4();
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

  const { "Confirmation.TriggerButton": TriggerButton } = extractChildren(children, ["Confirmation.TriggerButton"]);
  const ContentProps = extractChildrenProps(children, ConfirmationContentPropsCollector);

  const renderTrigger = () =>
    // wrapping the returned item in a function to avoid wrapping children in
    // a RawButton and needing to tab twice
    // https://github.com/acl-services/paprika/issues/126
    () =>
      React.cloneElement(TriggerButton, {
        isConfirmOpen,
        onOpenConfirm: handleOpenConfirm,
        triggerRef,
      });
  const popoverContent = (
    <Popover.Content {...ContentProps}>
      <Popover.Card
        role="dialog"
        aria-labelledby={heading ? titleId : null}
        aria-describedby={body ? descriptionId : null}
      >
        <div css={confirmStyles}>
          {heading && (
            <Heading id={titleId} displayLevel={5} level={2}>
              {heading}
            </Heading>
          )}
          {body && (
            <div css={confirmBodyStyles} id={descriptionId}>
              {body}
            </div>
          )}
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
              kind={types.MINOR}
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
      {TriggerButton && <Popover.Trigger>{renderTrigger()}</Popover.Trigger>}
      {popoverContent}
    </Popover>
  );
};

Confirmation.types = {
  size: constants.defaultSize,
  kind: constants.kind,
};

const propTypes = {
  /** Content of the popover confirmation */
  body: PropTypes.node,
  /** Size of the button */
  buttonSize: PropTypes.oneOf([
    Confirmation.types.size.SMALL,
    Confirmation.types.size.MEDIUM,
    Confirmation.types.size.LARGE,
  ]),
  children: PropTypes.node,
  /** Determine the styling of the confirm button */
  confirmButtonType: PropTypes.oneOf([Confirmation.types.kind.PRIMARY, Confirmation.types.kind.DESTRUCTIVE]),
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
  buttonSize: Confirmation.types.size.MEDIUM,
  children: null,
  confirmButtonType: Confirmation.types.kind.DESTRUCTIVE,
  defaultIsOpen: false,
  heading: null,
  isPending: false,
  onClose: () => {},
};

Confirmation.displayName = "Confirmation";
Confirmation.propTypes = propTypes;
Confirmation.defaultProps = defaultProps;
Confirmation.Content = ConfirmationContentPropsCollector;
Confirmation.TriggerButton = TriggerButton;

export default Confirmation;
