import React from "react";
import PropTypes from "prop-types";
import L10n from "@paprika/l10n";
import useI18n from "@paprika/l10n/lib/useI18n";
import Button from "../../Button/src/Button";
import ButtonStyles from "./DialogActions.styles";

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
        size="large"
        kind="minor"
        onClick={onCancel}
        css={ButtonStyles}
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
        size="large"
        kind={kindConfirm}
      >
        {labelConfirm === "" ? I18n.t("actions.confirm") : labelConfirm}
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
        {labelDecline === "" ? I18n.t("actions.decline") : labelDecline}
      </Button>
    );
  }

  return (
    <L10n>
      <div {...moreProps}>
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
