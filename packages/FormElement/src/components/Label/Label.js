import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import tokens from "@paprika/tokens";
import Help from "../Help/Help";
import { FormElementContext } from "../../FormElement";
import * as sc from "./Label.styles";

const Label = props => {
  const { help, helpA11yText, children, isDisabled: isDisabledProp, ...moreProps } = props;
  const { hasFieldSet, isOptional, isRequired, isDisabled: isDisabledContext, labelId, refLabel } = React.useContext(
    FormElementContext
  );
  const I18n = useI18n();

  const isDisabled = isDisabledProp === null ? isDisabledContext : isDisabledProp;
  const labelProps = hasFieldSet ? { as: "legend" } : { as: "label" };
  const a11yProps = hasFieldSet ? { ref: refLabel } : { htmlFor: labelId, ref: refLabel };
  const Spacer = () => <div style={{ width: tokens.spaceSm }} />;

  const renderQuestionRequirement = () => {
    if (isRequired) {
      return `${I18n.t("formElement.required")}`;
    }
    if (isOptional) {
      return `${I18n.t("formElement.optional")}`;
    }
  };

  return (
    <sc.Label
      data-pka-anchor="form-element.label"
      isDisabledStyle={isDisabledProp}
      {...labelProps}
      {...moreProps}
      {...a11yProps}
    >
      {children}
      {isOptional || isRequired ? (
        <>
          <Spacer />
          <sc.Requirement>{renderQuestionRequirement()}</sc.Requirement>
        </>
      ) : null}
      {help ? (
        <>
          <Spacer />
          <Help a11yText={helpA11yText} isDisabled={isDisabled}>
            {help}
          </Help>
        </>
      ) : null}
    </sc.Label>
  );
};

const propTypes = {
  /** content for the label */
  children: PropTypes.node.isRequired,

  /** Help indicator */
  help: PropTypes.node,

  /** Aria label for icon button that triggers help popover */
  helpA11yText: PropTypes.string,

  /** If the label should be dimmed and the help popover disabled */
  isDisabled: PropTypes.bool,

  /** Should label be hidden */
  isVisuallyHidden: PropTypes.bool,
};

const defaultProps = {
  help: null,
  helpA11yText: null,
  isDisabled: null,
  isVisuallyHidden: false,
};

Label.displayName = "FormElement.Label";
Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
