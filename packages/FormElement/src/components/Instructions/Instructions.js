import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import * as sc from "./Instructions.styles";
import { FormElementContext } from "../../FormElement";

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Instructions(props) {
  const [ariaInstructionsId] = React.useState(nanoid);
  const { addIdToAriaDescribedBy } = React.useContext(FormElementContext);
  const { children, ...moreProps } = props;

  React.useEffect(() => {
    addIdToAriaDescribedBy({ ariaInstructionsId });
  }, []);

  return (
    <sc.Instructions data-pka-anchor="form-element.instructions" {...moreProps} id={ariaInstructionsId}>
      {children}
    </sc.Instructions>
  );
}

Instructions.displayName = "FormElement.Instructions";

Instructions.propTypes = propTypes;

export default Instructions;
