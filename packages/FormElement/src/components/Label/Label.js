import React from "react";
import PropTypes from "prop-types";

import useI18n from "@paprika/l10n/lib/useI18n";

import labelStyles, { ruleStyles } from "./Label.styles";

const propTypes = {
  hasOptionalLabel: PropTypes.bool.isRequired,
  hasRequiredLabel: PropTypes.bool.isRequired,
  help: PropTypes.node,
  id: PropTypes.string,
  isInline: PropTypes.bool.isRequired,
  isVisuallyHidden: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  hasFieldSet: PropTypes.bool.isRequired,
};

const defaultProps = {
  help: null,
  id: null,
};

const Label = React.forwardRef((props, ref) => {
  const { hasOptionalLabel, hasRequiredLabel, help, id, hasFieldSet, label, ...moreProps } = props;
  const I18n = useI18n();

  const labelProps = hasFieldSet ? { as: "legend" } : { as: "label", htmlFor: id, ref };

  return (
    <div data-pka-anchor="form-element.label" css={labelStyles} {...labelProps} {...moreProps}>
      {label}
      {hasOptionalLabel || hasRequiredLabel ? (
        <span css={ruleStyles}>
          {" "}
          {hasRequiredLabel ? I18n.t("formElement.required") : null}
          {hasOptionalLabel ? I18n.t("formElement.optional") : null}
        </span>
      ) : null}

      {help}
    </div>
  );
});

Label.displayName = "FormElement.Label";

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
