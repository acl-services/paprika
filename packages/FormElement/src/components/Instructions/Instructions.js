import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Instructions.styles";
import { FormElementContext } from "../../FormElement";

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Instructions(props) {
  const { formElementA11yProps } = React.useContext(FormElementContext);
  const { children, ...moreProps } = props;

  const a11yProps = formElementA11yProps ? { id: formElementA11yProps.instructionsA11yProps.id } : {};

  return (
    <sc.Instructions data-pka-anchor="form-element.instructions" {...moreProps} {...a11yProps}>
      {children}
    </sc.Instructions>
  );
}

Instructions.displayName = "FormElement.Instructions";

Instructions.propTypes = propTypes;

export default Instructions;
