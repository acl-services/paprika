import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import { FormElementContext } from "../../FormElement";
import * as sc from "./Description.styles";

const propTypes = {
  /** Content for the form element description */
  children: PropTypes.node.isRequired,
};

function Description(props) {
  const { children, ...moreProps } = props;
  const { addIdToAriaDescribedBy } = React.useContext(FormElementContext);
  const [ariaDescriptionId] = React.useState(nanoid);

  React.useEffect(() => {
    if (addIdToAriaDescribedBy) addIdToAriaDescribedBy({ ariaDescriptionId });
  }, []);

  return (
    <sc.Description data-pka-anchor="form-element.description" {...moreProps} id={ariaDescriptionId}>
      {children}
    </sc.Description>
  );
}

Description.displayName = "FormElement.Description";
Description.propTypes = propTypes;

export default Description;
