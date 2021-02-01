import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { FormElementContext } from "../../FormElement";
import * as sc from "./Instructions.styles";

function Instructions(props) {
  const { children, ...moreProps } = props;
  const { addIdToAriaDescribedBy } = React.useContext(FormElementContext);
  const [ariaInstructionsId] = React.useState(() => `form-element-aria-info_${uuidv4()}`);

  React.useEffect(() => {
    if (addIdToAriaDescribedBy) addIdToAriaDescribedBy({ ariaInstructionsId });
  }, []);

  if (!children) return null;

  return (
    <sc.Instructions data-pka-anchor="form-element.instructions" {...moreProps} id={ariaInstructionsId}>
      {children}
    </sc.Instructions>
  );
}
const propTypes = {
  /** Content for the form element instructions */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Instructions.displayName = "FormElement.Instructions";
Instructions.propTypes = propTypes;
Instructions.defaultProps = defaultProps;

export default Instructions;
