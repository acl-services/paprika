import React from "react";
import PropTypes from "prop-types";

import useI18n from "@paprika/l10n/lib/useI18n";

import labelStyles, { ruleStyles } from "./Label.styles";
import Help from "../Help/Help";
import { FormElementContext } from "../../FormElement";

const propTypes = {
  children: PropTypes.node.isRequired,
  /** If "optional" text should be displayed beside the label  */
  hasOptionalLabel: PropTypes.bool,
  /** If "require" text should be displayed beside the label */
  hasRequiredLabel: PropTypes.bool,
  /** Help indicator */
  help: PropTypes.node,
  /** id for the element */
  id: PropTypes.string,
  /** Should label be hidden */
  isVisuallyHidden: PropTypes.bool,

  onClick: PropTypes.func,
};

const defaultProps = {
  hasOptionalLabel: false,
  hasRequiredLabel: false,
  help: null,
  id: null,
  isVisuallyHidden: false,
  onClick: () => {},
};

const Label = props => {
  const { hasFieldSet, formElementA11yProps } = React.useContext(FormElementContext);
  const { hasOptionalLabel, hasRequiredLabel, help, id, children, ...moreProps } = props;

  const I18n = useI18n();

  const labelProps = hasFieldSet ? { as: "legend" } : { as: "label" };

  const a11yProps = formElementA11yProps
    ? { htmlFor: formElementA11yProps.labelA11yProps.id, ref: formElementA11yProps.labelA11yProps.ref }
    : {};

  const renderQuestionRequirement = () => {
    if (hasRequiredLabel) {
      return I18n.t("formElement.required");
    }
    if (hasOptionalLabel) {
      return I18n.t("formElement.optional");
    }
  };

  const renderHelp = () => {
    if (help) {
      return <Help>{help}</Help>;
    }
    return null;
  };

  return (
    <div data-pka-anchor="form-element.label" css={labelStyles} {...labelProps} {...moreProps} {...a11yProps}>
      {children}
      {hasOptionalLabel || hasRequiredLabel ? <span css={ruleStyles}> {renderQuestionRequirement()}</span> : null}
      {renderHelp()}
    </div>
  );
};

Label.displayName = "FormElement.Label";

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
