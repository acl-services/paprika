import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import Button from "@paprika/button";
import * as sc from "./DialogActions.styles";

const propTypes = {
  /** If the primary button is a destructive action. */
  kindConfirm: PropTypes.string,

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
  kindConfirm: "primary",
  isDisabled: false,
  labelCancel: "",
  labelConfirm: "",
  labelDecline: "",
  onCancel: () => {},
  onConfirm: () => {},
  onDecline: () => {},
};

function DialogActions(props) {
  const I18n = useI18n();
  const {
    kindConfirm,
    isDisabled,
    labelCancel,
    labelConfirm,
    labelDecline,
    onCancel,
    onConfirm,
    onDecline,
    ...moreProps
  } = props;

  function renderCancelButton() {
    if (!onCancel) return null;
    return (
      <Button
        data-pka-anchor="dialog-actions__cancel"
        isDisabled={isDisabled}
        size={Button.types.size.LARGE}
        kind={Button.types.kind.MINOR}
        onClick={onCancel}
      >
        {labelCancel === "" ? I18n.t("actions.cancel") : labelCancel}
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
        size={Button.types.size.LARGE}
        kind={kindConfirm}
      >
        {labelConfirm === "" ? I18n.t("actions.confirm") : labelConfirm}
      </Button>
    );
  }

  function renderDeclineButton() {
    if (!onDecline) return null;
    return (
      <Button data-pka-anchor="dialog-actions__decline" isDisabled={isDisabled} onClick={onDecline} size="large">
        {labelDecline === "" ? I18n.t("actions.decline") : labelDecline}
      </Button>
    );
  }

  return (
    <sc.DialogActions {...moreProps}>
      {renderConfirmButton()}
      {renderDeclineButton()}
      {renderCancelButton()}
    </sc.DialogActions>
  );
}

DialogActions.displayName = "DialogActions";
DialogActions.propTypes = propTypes;
DialogActions.defaultProps = defaultProps;
export default DialogActions;
