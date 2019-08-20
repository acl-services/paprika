import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import useI18n from "@paprika/l10n/lib/useI18n";
import Popover from "@paprika/popover";
import Trigger from "./components/Trigger";

import {
  confirmStyles,
  confirmHeaderStyles,
  confirmDescriptionStyles,
  confirmFooterStyles,
} from "./Confirmation.styles";

const propTypes = {
  buttonSize: PropTypes.oneOf(ShirtSizes.DEFAULT),
  confirmButtonType: PropTypes.oneOf(["primary", "destructive"]),
  confirmLabel: PropTypes.node.isRequired,
  description: PropTypes.node,
  heading: PropTypes.node.isRequired,
  defaultIsOpen: PropTypes.bool,
  isPending: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
  /** Render prop for rendering the trigger element that toggles the render panel */
  renderTrigger: PropTypes.func,
};

const defaultProps = {
  buttonSize: ShirtSizes.MEDIUM,
  confirmButtonType: "destructive",
  description: null,
  defaultIsOpen: false,
  isPending: false,
  renderTrigger: null,
  onClose: () => {},
};

const Confirmation = props => {
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const {
    heading,
    buttonSize,
    confirmButtonType,
    confirmLabel,
    description,
    defaultIsOpen,
    isPending,
    onConfirm,
    onClose,
    ...moreProps
  } = props;
  const confirmButtonRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const confirmPanelRefId = React.useRef(null);

  const focusConfirmButton = () => {
    if (confirmButtonRef.current) confirmButtonRef.current.focus();
  };

  const handleOpenConfirm = () => {
    setIsConfirmOpen(true);
    setTimeout(() => {
      focusConfirmButton();
    }, 200);
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

  const closeConfirm = () => {
    setIsConfirmOpen(false);
  };

  const handleOnConfirm = () => {
    onConfirm(closeConfirm);
  };

  const handleCloseConfirm = () => {
    setIsConfirmOpen(false);
    if (triggerRef.current) triggerRef.current.focus();
    onClose();
  };

  const renderTrigger = () => {
    const triggerComponent = props.renderTrigger(triggerProps);
    // wrapping the returned item in a function to avoid needing to tab twice
    // https://github.com/acl-services/paprika/issues/126
    return () =>
      React.cloneElement(triggerComponent, {
        triggerRef,
        confirmPanelRefId: confirmPanelRefId.current,
      });
  };

  const I18n = useI18n();

  return (
    <Popover isOpen={isConfirmOpen} onClose={handleCloseConfirm} {...moreProps}>
      {props.renderTrigger ? <Popover.Trigger>{renderTrigger()}</Popover.Trigger> : null}
      <Popover.Content id={confirmPanelRefId.current}>
        <Popover.Card>
          <div css={confirmStyles}>
            <div css={confirmHeaderStyles}>{heading}</div>
            {description && <div css={confirmDescriptionStyles}>{description}</div>}
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
                kind="minor"
                size={buttonSize}
                onClick={handleCloseConfirm}
              >
                {I18n.t("actions.cancel")}
              </Button>
            </div>
          </div>
        </Popover.Card>
      </Popover.Content>
    </Popover>
  );
};

Confirmation.displayName = "Confirmation";
Confirmation.propTypes = propTypes;
Confirmation.defaultProps = defaultProps;
Confirmation.Trigger = Trigger;

export default Confirmation;
