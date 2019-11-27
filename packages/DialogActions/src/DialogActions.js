import React from "react";
import PropTypes from "prop-types";
import L10n from "@paprika/l10n";
import useI18n from "@paprika/l10n/lib/useI18n";
import Button from "../../Button/src/Button";
import ButtonStyles from "./DialogActions.styles";

const propTypes = {
  /** Optional custom classes. */
  className: PropTypes.string,

  /** If the primary button is a destructive action. */
  confirmKind: PropTypes.string,

  /** If the primary and secondary buttons are disabled. */
  isDisabled: PropTypes.bool,

  /** Text for cancel button. */
  labelCancel: PropTypes.string.isRequired,

  /** Text for primary action button. */
  labelConfirm: PropTypes.string.isRequired,

  /** Text for a secondary generic button. */
  labelDecline: PropTypes.string.isRequired,

  /** Function to call when cancel button is clicked. */
  onCancel: PropTypes.func,

  /** Function to call when primary button is clicked. */
  onConfirm: PropTypes.func,

  /** Function to call when secondary button is clicked. */
  onDecline: PropTypes.func,
};

const defaultProps = {
  className: "",
  confirmKind: "primary",
  isDisabled: false,
  onCancel: () => {},
  onConfirm: () => {},
  onDecline: () => {},
};

function DialogActions(props) {
  const I18n = useI18n();
  const { confirmKind, isDisabled, labelCancel, labelConfirm, labelDecline, onCancel, onConfirm, onDecline } = props;

  function renderCancelButton() {
    if (!onCancel) return null;
    return (
      <Button
        data-pka-anchor="dialog-actions__cancel"
        isDisabled={isDisabled}
        size="large"
        kind="minor"
        onClick={onCancel}
        css={ButtonStyles}
      >
        {labelCancel || I18n.t("actions.cancel")}
      </Button>
    );
  }
  function renderConfirmButton() {
    if (!onConfirm) return null;
    return (
      <Button
        data-pka-anchor="dialog-actions__confirm"
        isDisabled={isDisabled}
        onClick={onConfirm}
        size="large"
        kind={confirmKind}
      >
        {labelConfirm || I18n.t("actions.confirm")}
      </Button>
    );
  }

  function renderDeclineButton() {
    if (!onDecline) return null;
    return (
      <Button
        data-pka-anchor="dialog-actions__decline"
        isDisabled={isDisabled}
        onClick={onDecline}
        size="large"
        css={ButtonStyles}
      >
        {labelDecline || I18n.t("actions.decline")}
      </Button>
    );
  }

  return (
    <L10n>
      <div data-pka-anchor={`dialog-actions ${props.className}`}>
        {renderConfirmButton()}
        {renderDeclineButton()}
        {renderCancelButton()}
      </div>
    </L10n>
  );
}

DialogActions.displayName = "DialogActions";
DialogActions.propTypes = propTypes;
DialogActions.defaultProps = defaultProps;
export default DialogActions;
