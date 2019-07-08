import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import useI18n from "@paprika/l10n/lib/useI18n";
import ConfirmationStyles from "./Confirmation.styles";

const { func, string } = PropTypes;

const propTypes = {
  buttonSize: string,
  confirmButtonType: string,
  confirmLabel: string.isRequired,
  description: string,
  onCancel: func.isRequired,
  onConfirm: func.isRequired,
  title: string.isRequired,
};

const defaultProps = {
  buttonSize: ShirtSizes.DEFAULT,
  confirmButtonType: "destructive",
  description: null,
};

const Confirmation = ({ title, buttonSize, confirmButtonType, confirmLabel, description, onConfirm, onCancel }) => {
  const I18n = useI18n();
  return (
    <div css={ConfirmationStyles}>
      <div className="dropdown-menu__confirmation-header">{title}</div>
      {description && <div className="dropdown-menu__confirmation-description">{description}</div>}
      <div className="dropdown-menu__confirmation-footer">
        <Button type={confirmButtonType} size={buttonSize} onClick={onConfirm}>
          {confirmLabel}
        </Button>
        <Button type="minor" size={buttonSize} onClick={onCancel}>
          {I18n.t("actions.cancel")}
        </Button>
      </div>
    </div>
  );
};

Confirmation.componentType = "DropDownMenu.Confirmation";
Confirmation.propTypes = propTypes;
Confirmation.defaultProps = defaultProps;

export default Confirmation;
