import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Description.styles";
import { FormElementContext } from "../../FormElement";

const propTypes = {
  ariaDescriptionId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  ariaDescriptionId: null,
};

function Description(props) {
  const { formElementA11yProps } = React.useContext(FormElementContext);
  const { children, ariaDescriptionId, ...moreProps } = props;

  const a11yProps = formElementA11yProps ? { id: formElementA11yProps.descriptionA11yProps.id } : {};

  return (
    <sc.Description data-pka-anchor="form-element.description" {...moreProps} {...a11yProps}>
      {children}
    </sc.Description>
  );
}

Description.displayName = "FormElement.Description";

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
