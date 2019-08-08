import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import useI18n from "@paprika/l10n/lib/useI18n";
import Popover from "@paprika/popover";
import contentStyles from "./ContentStyles.styles";
import ConfirmationStyles from "./Confirmation.styles";

const propTypes = {
  buttonSize: PropTypes.oneOf(ShirtSizes.DEFAULT),
  confirmButtonType: PropTypes.oneOf(["primary", "destructive"]),
  confirmLabel: PropTypes.string.isRequired,
  description: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
};

const defaultProps = {
  buttonSize: ShirtSizes.MEDIUM,
  confirmButtonType: "destructive",
  description: null,
  onClose: () => {},
};

const Confirmation = props => {
  const {
    heading,
    buttonSize,
    confirmButtonType,
    confirmLabel,
    description,
    onConfirm,
    onCancel,
    onClose,
    isOpen,
  } = props;
  const confirmRef = React.useRef(null);

  React.useEffect(() => {
    if (confirmRef.current) confirmRef.current.focus();
  });

  const I18n = useI18n();
  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <Popover.Content>
        <div css={contentStyles}>
          <div css={ConfirmationStyles}>
            <div className="dropdown-menu__confirmation-header">{heading}</div>
            {description && <div className="dropdown-menu__confirmation-description">{description}</div>}
            <div className="dropdown-menu__confirmation-footer">
              <Button
                isSemantic={false}
                ref={confirmRef}
                kind={confirmButtonType}
                size={buttonSize}
                onClick={onConfirm}
              >
                {confirmLabel}
              </Button>
              <Button isSemantic={false} kind="minor" size={buttonSize} onClick={onCancel}>
                {I18n.t("actions.cancel")}
              </Button>
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
};

Confirmation.displayName = "DropdownMenu.Confirmation";
Confirmation.propTypes = propTypes;
Confirmation.defaultProps = defaultProps;

export default Confirmation;
