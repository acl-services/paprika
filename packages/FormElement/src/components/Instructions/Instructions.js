import React from "react";
import PropTypes from "prop-types";

import instructionsStyles from "./Instructions.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Instructions(props) {
  const { children, ...moreProps } = props;

  return (
    <div css={instructionsStyles} data-pka-anchor="formElement.instructions" {...moreProps}>
      {children}
    </div>
  );
}

Instructions.displayName = "FormElement.Instructions";

Instructions.propTypes = propTypes;

export default Instructions;
