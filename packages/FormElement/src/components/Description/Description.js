import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Description.styles";

const propTypes = {
  ariaDescriptionId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  ariaDescriptionId: null,
};

function Description(props) {
  const { children, ariaDescriptionId, ...moreProps } = props;

  return (
    <sc.Description id={ariaDescriptionId} data-pka-anchor="form-element.description" {...moreProps}>
      {children}
    </sc.Description>
  );
}

Description.displayName = "FormElement.Description";

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
