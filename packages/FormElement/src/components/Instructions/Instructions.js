import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Instructions.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Instructions(props) {
  const { children, ...moreProps } = props;

  return (
    <styled.Instructions data-pka-anchor="form-element.instructions" {...moreProps}>
      {children}
    </styled.Instructions>
  );
}

Instructions.displayName = "FormElement.Instructions";

Instructions.propTypes = propTypes;

export default Instructions;
