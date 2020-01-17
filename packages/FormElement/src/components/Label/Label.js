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
  hasFieldset: PropTypes.bool.isRequired,
};

const defaultProps = {
  help: null,
};

const Label = React.forwardRef((props, ref) => {
  const { hasOptionalLabel, hasRequiredLabel, help, id, isInline, isVisuallyHidden, hasFieldset, label } = props;
  const I18n = useI18n();

  const renderLabelContents = () => {
    return (
      <>
        {label}
        {hasOptionalLabel || hasRequiredLabel ? (
          <span css={ruleStyles}>
            {" "}
            {hasRequiredLabel ? I18n.t("formElement.required") : null}
            {hasOptionalLabel ? I18n.t("formElement.optional") : null}
          </span>
        ) : null}
      </>
    );
  };

  const renderLegend = () => {
    return <legend>{renderLabelContents()}</legend>;
  };

  const renderLabel = () => {
    return (
      <label htmlFor={id} data-pka-anchor="form-element.label" ref={ref}>
        {renderLabelContents()}
      </label>
    );
  };

  return (
    <div css={labelStyles} isInline={isInline} isVisuallyHidden={isVisuallyHidden}>
      {hasFieldset ? renderLegend() : renderLabel()}
      {help}
    </div>
  );
});

Label.displayName = "FormElement.Label";

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
