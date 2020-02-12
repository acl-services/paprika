import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import Heading from "@paprika/heading";
import * as sc from "./Instructions.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasTitle: PropTypes.bool,
};

const defaultProps = {
  hasTitle: false,
};

function Instructions(props) {
  const { children, hasTitle, ...moreProps } = props;
  const I18n = useI18n();

  return (
    <sc.Instructions data-pka-anchor="form-element.instructions" {...moreProps}>
      {hasTitle ? (
        <Heading level={3} displayLevel={6} isLight>
          {I18n.t("formElement.instructions")}
        </Heading>
      ) : null}
      {children}
    </sc.Instructions>
  );
}

Instructions.defaultProps = defaultProps;

Instructions.displayName = "FormElement.Instructions";

Instructions.propTypes = propTypes;

export default Instructions;
