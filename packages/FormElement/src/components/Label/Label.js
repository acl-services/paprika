import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import Help from "../Help/Help";
import { FormElementContext } from "../../FormElement";
import * as sc from "./Label.styles";

const Label = props => {
  const { hasOptionalLabel, hasRequiredLabel, help, helpA11yText, children, ...moreProps } = props;
  const { hasFieldSet, refLabel, labelId } = React.useContext(FormElementContext);
  const I18n = useI18n();

  const labelProps = hasFieldSet ? { as: "legend" } : { as: "label" };
  const a11yProps = hasFieldSet ? { ref: refLabel } : { htmlFor: labelId, ref: refLabel };

  const renderQuestionRequirement = () => {
    if (hasRequiredLabel) {
      return `${I18n.t("formElement.required")}`;
    }
    if (hasOptionalLabel) {
      return `${I18n.t("formElement.optional")}`;
    }
  };

  return (
    <sc.Label data-pka-anchor="form-element.label" {...labelProps} {...moreProps} {...a11yProps}>
      {children}
      {hasOptionalLabel || hasRequiredLabel ? (
        <>
          &nbsp;<sc.Requirement>{renderQuestionRequirement()}</sc.Requirement>
        </>
      ) : null}
      {help ? (
        <>
          &nbsp;<Help a11yText={helpA11yText}>{help}</Help>
        </>
      ) : null}
    </sc.Label>
  );
};

const propTypes = {
  /** content for the label */
  children: PropTypes.node.isRequired,

  /** If "optional" text should be displayed beside the label  */
  hasOptionalLabel: PropTypes.bool,

  /** If "require" text should be displayed beside the label */
  hasRequiredLabel: PropTypes.bool,

  /** Help indicator */
  help: PropTypes.node,

  /** Aria label for icon button that triggers help popover */
  helpA11yText: PropTypes.string,

  /** Should label be hidden */
  isVisuallyHidden: PropTypes.bool,
};

const defaultProps = {
  hasOptionalLabel: false,
  hasRequiredLabel: false,
  help: null,
  helpA11yText: null,
  isVisuallyHidden: false,
};

Label.displayName = "FormElement.Label";
Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
