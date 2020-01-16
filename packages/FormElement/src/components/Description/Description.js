import React from "react";
import PropTypes from "prop-types";

import DescriptionStyled from "./Description.styles";

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
    <DescriptionStyled id={ariaDescriptionId} data-pka-anchor="formElement.description" {...moreProps}>
      {children}
    </DescriptionStyled>
  );
}

Description.displayName = "FormElement.Description";

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
