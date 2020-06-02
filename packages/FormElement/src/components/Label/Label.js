import React from "react";
import PropTypes from "prop-types";

import useI18n from "@paprika/l10n/lib/useI18n";

import labelStyles, { ruleStyles } from "./Label.styles";

const propTypes = {
  /** If "optional" text should be displayed beside the label  */
  hasOptionalLabel: PropTypes.bool.isRequired,
  /** If "require" text should be displayed beside the label */
  hasRequiredLabel: PropTypes.bool.isRequired,
  /** Help indicator */
  help: PropTypes.node,
  /** id for the element */
  id: PropTypes.string,
  /** Should label and children be inline or not */
  isInline: PropTypes.bool.isRequired,
  /** Should label be hidden */
  isVisuallyHidden: PropTypes.bool.isRequired,
  /** Label text of the input field */
  label: PropTypes.node.isRequired,
  /** Set if FormElement contains multiple children to render a legend element instead of label */
  hasFieldSet: PropTypes.bool.isRequired,

  onClick: PropTypes.func,
};

const defaultProps = {
  help: null,
  id: null,
  onClick: () => {},
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
