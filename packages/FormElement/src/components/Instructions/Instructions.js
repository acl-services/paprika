import React from "react";
import PropTypes from "prop-types";

import InstructionsStyled from "./Instructions.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Instructions(props) {
  const { children, ...moreProps } = props;

  return (
    <InstructionsStyled data-pka-anchor="formElement.instructions" {...moreProps}>
      {children}
    </InstructionsStyled>
  );
}

Instructions.displayName = "FormElement.Instructions";

Instructions.propTypes = propTypes;

export default Instructions;
