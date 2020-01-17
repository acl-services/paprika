import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Instructions.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Instructions(props) {
  const { children, ...moreProps } = props;

  return (
    <styled.InstructionsStyled data-pka-anchor="formElement.instructions" {...moreProps}>
      {children}
    </styled.InstructionsStyled>
  );
}

Instructions.displayName = "FormElement.Instructions";

Instructions.propTypes = propTypes;

export default Instructions;
