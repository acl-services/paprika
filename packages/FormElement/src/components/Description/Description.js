import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import { FormElementContext } from "../../FormElement";
import * as sc from "./Description.styles";

function Description(props) {
  const { children, ...moreProps } = props;
  const { addIdToAriaDescribedBy } = React.useContext(FormElementContext);
  const [ariaDescriptionId] = React.useState(nanoid);

  React.useEffect(() => {
    if (addIdToAriaDescribedBy) addIdToAriaDescribedBy({ ariaDescriptionId });
  }, []);

  if (!children) return null;

  return (
    <sc.Description data-pka-anchor="form-element.description" {...moreProps} id={ariaDescriptionId}>
      {children}
    </sc.Description>
  );
}

const propTypes = {
  /** Content for the form element description */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Description.displayName = "FormElement.Description";
Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
