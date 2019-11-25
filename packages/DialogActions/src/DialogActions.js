import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/src/Button";
import ButtonStyles from "./DialogActions.styles";

const propTypes = {
  /** Optional custom classes. */
  className: PropTypes.string,

  /** If a cancel button should be shown. */
  hasCancel: PropTypes.bool,

  /** If a primary action button should be shown. */
  hasConfirm: PropTypes.bool,

  /** If a secondary generic button should be shown. */
  hasDecline: PropTypes.bool,

  /** If the primary button is a destructive action. */
  isDestructive: PropTypes.bool,

  /** If the primary and secondary buttons are disabled. */
  isDisabled: PropTypes.bool,

  /** Text for cancel button. */
  labelCancel: PropTypes.string,

  /** Text for primary action button. */
  labelConfirm: PropTypes.string,

  /** Text for a secondary generic button. */
  labelDecline: PropTypes.string,

  /** Function to call when cancel button is clicked. */
  onCancel: PropTypes.func,

  /** Function to call when primary button is clicked. */
  onConfirm: PropTypes.func,

  /** Function to call when secondary button is clicked. */
  onDecline: PropTypes.func,
};

const defaultProps = {
  className: "",
  hasCancel: true,
  hasConfirm: true,
  hasDecline: true,
  isDestructive: false,
  isDisabled: false,
  labelCancel: "Cancel", // TODO: i18n
  labelConfirm: "Save", // TODO: i18n
  labelDecline: "Don't Save", // TODO: i18n
  onCancel: () => {},
  onConfirm: () => {},
  onDecline: () => {},
};

function renderCancelButton(hasCancel, onCancel, labelCancel) {
  if (!hasCancel) return null;
  return (
    <Button data-pka-anchor="dialog-actions__cancel" size="large" kind="minor" onClick={onCancel}>
      {labelCancel}
    </Button>
  );
}

function renderConfirmButton(hasConfirm, isDisabled, onConfirm, isDestructive, labelConfirm) {
  if (!hasConfirm) return null;
  return (
    <Button
      data-pka-anchor="dialog-actions__confirm"
      isDisabled={isDisabled}
      onClick={onConfirm}
      size="large"
      kind={isDestructive ? "destructive" : "primary"}
    >
      {labelConfirm}
    </Button>
  );
}

function renderDeclineButton(hasDecline, isDisabled, onDecline, labelDecline) {
  if (!hasDecline) return null;
  return (
    <Button
      data-pka-anchor="dialog-actions__decline"
      isDisabled={isDisabled}
      onClick={onDecline}
      size="large"
      css={ButtonStyles}
    >
      {labelDecline}
    </Button>
  );
}

function DialogActions(props) {
  if (!props.hasConfirm && !props.hasCancel && !props.hasDecline) return null;
  return (
    <div data-pka-anchor={`dialog-actions ${props.className}`}>
      {renderConfirmButton(
        props.hasConfirm,
        props.isDisabled,
        props.onConfirm,
        props.isDestructive,
        props.labelConfirm
      )}
      {renderDeclineButton(props.hasDecline, props.isDisabled, props.onDecline, props.labelDecline)}
      {renderCancelButton(props.hasCancel, props.onCancel, props.labelCancel)}
    </div>
  );
}

DialogActions.displayName = "DialogActions";
DialogActions.propTypes = propTypes;
DialogActions.defaultProps = defaultProps;
export default DialogActions;
