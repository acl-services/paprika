import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Instructions.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Instructions(props) {
  const { children, ...moreProps } = props;

  return (
    <sc.Instructions data-pka-anchor="form-element.instructions" {...moreProps}>
      {children}
    </sc.Instructions>
  );
}

Instructions.displayName = "FormElement.Instructions";

Instructions.propTypes = propTypes;

export default Instructions;
