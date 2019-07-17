import React from "react";
import PropTypes from "prop-types";

import useI18n from "@paprika/l10n/lib/useI18n";

import labelStyles, { ruleStyles } from "./Label.styles";

const propTypes = {};

const defaultProps = {
  isDisabled: false,
  isInline: false,
  isOptional: false,
  isReadOnly: false,
  isRequired: false,
  size: "medium",
};

function Label(props) {
  const { label, id, isOptional, isRequired, isInline } = props;
  const I18n = useI18n();

  return (
    <label css={labelStyles} htmlFor={id}>
      {label}
      {
        <span css={ruleStyles}>
          {isRequired ? I18n.t("formElement.required") : null}
          {isOptional ? I18n.t("formElement.optional") : null}
        </span>
      }
    </label>
  );
}

Label.displayName = "FormElement.Label";

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
