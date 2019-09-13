import React from "react";
import PropTypes from "prop-types";

import useI18n from "@paprika/l10n/lib/useI18n";

import labelStyles, { ruleStyles } from "./Label.styles";

const propTypes = {
  hasOptionalLabel: PropTypes.bool.isRequired,
  hasRequiredLabel: PropTypes.bool.isRequired,
  help: PropTypes.node,
  id: PropTypes.string.isRequired,
  isInline: PropTypes.bool.isRequired,
  isVisuallyHidden: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

const defaultProps = {
  help: null,
};

function Label(props) {
  const { hasOptionalLabel, hasRequiredLabel, help, id, isInline, isVisuallyHidden, label } = props;
  const I18n = useI18n();

  return (
    <div css={labelStyles} isInline={isInline} isVisuallyHidden={isVisuallyHidden}>
      <label htmlFor={id} data-pka-anchor="formElement.label">
        {label}
        {hasOptionalLabel || hasRequiredLabel ? (
          <span css={ruleStyles}>
            {hasRequiredLabel ? I18n.t("formElement.required") : null}
            {hasOptionalLabel ? I18n.t("formElement.optional") : null}
          </span>
        ) : null}
      </label>
      {help}
    </div>
  );
}

Label.displayName = "FormElement.Label";

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
