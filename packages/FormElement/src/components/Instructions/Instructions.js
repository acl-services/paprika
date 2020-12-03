import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import { FormElementContext } from "../../FormElement";
import * as sc from "./Instructions.styles";

function Instructions(props) {
  const { children, ...moreProps } = props;
  const { addIdToAriaDescribedBy } = React.useContext(FormElementContext);
  const [ariaInstructionsId] = React.useState(nanoid);

  React.useEffect(() => {
    if (addIdToAriaDescribedBy) addIdToAriaDescribedBy({ ariaInstructionsId });
  }, []);

  return (
    <sc.Instructions data-pka-anchor="form-element.instructions" {...moreProps} id={ariaInstructionsId}>
      {children}
    </sc.Instructions>
  );
}
const propTypes = {
  /** Content for the form element instructions */
  children: PropTypes.node.isRequired,
};

Instructions.displayName = "FormElement.Instructions";
Instructions.propTypes = propTypes;

export default Instructions;
