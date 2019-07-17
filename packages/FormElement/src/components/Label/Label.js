import React from "react";
import PropTypes from "prop-types";

import useI18n from "@paprika/l10n/lib/useI18n";

import labelStyles, { ruleStyles } from "./Label.styles";

const propTypes = {
  hint: PropTypes.node,
  id: PropTypes.string.isRequired,
  isInline: PropTypes.bool.isRequired,
  isOptional: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool.isRequired,
  isVisuallyHidden: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

const defaultProps = {
  hint: null,
};

function Label(props) {
  const { hint, id, isInline, isOptional, isRequired, isVisuallyHidden, label } = props;
  const I18n = useI18n();

  return (
    <div css={labelStyles} isInline={isInline} isVisuallyHidden={isVisuallyHidden}>
      <label htmlFor={id}>
        {label}
        {isOptional || isRequired ? (
          <span css={ruleStyles}>
            {isRequired ? I18n.t("formElement.required") : null}
            {isOptional ? I18n.t("formElement.optional") : null}
          </span>
        ) : null}
      </label>
      {hint}
    </div>
  );
}

Label.displayName = "FormElement.Label";

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
