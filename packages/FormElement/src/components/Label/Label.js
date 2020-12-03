import React from "react";
import PropTypes from "prop-types";

import useI18n from "@paprika/l10n/lib/useI18n";

import labelStyles, { ruleStyles } from "./Label.styles";
import Help from "../Help/Help";
import { FormElementContext } from "../../FormElement";

const propTypes = {
  /** content for the label */
  children: PropTypes.node.isRequired,
  /** If "optional" text should be displayed beside the label  */
  hasOptionalLabel: PropTypes.bool,
  /** If "require" text should be displayed beside the label */
  hasRequiredLabel: PropTypes.bool,
  /** Help indicator */
  help: PropTypes.node,
  /** Should label be hidden */
  isVisuallyHidden: PropTypes.bool,
};

const defaultProps = {
  hasOptionalLabel: false,
  hasRequiredLabel: false,
  help: null,
  isVisuallyHidden: false,
};

const Label = props => {
  const { hasOptionalLabel, hasRequiredLabel, help, children, ...moreProps } = props;
  const { hasFieldSet, refLabel, labelId } = React.useContext(FormElementContext);
  const I18n = useI18n();

  const labelProps = hasFieldSet ? { as: "legend" } : { as: "label" };
  const a11yProps = hasFieldSet ? { ref: refLabel } : { htmlFor: labelId, ref: refLabel };

  const renderQuestionRequirement = () => {
    if (hasRequiredLabel) {
      return I18n.t("formElement.required");
    }
    if (hasOptionalLabel) {
      return I18n.t("formElement.optional");
    }
  };

  return (
    <div data-pka-anchor="form-element.label" css={labelStyles} {...labelProps} {...moreProps} {...a11yProps}>
      {children}
      {hasOptionalLabel || hasRequiredLabel ? <span css={ruleStyles}> {renderQuestionRequirement()}</span> : null}
      {help ? <Help>{help}</Help> : null}
    </div>
  );
};

Label.displayName = "FormElement.Label";
Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
