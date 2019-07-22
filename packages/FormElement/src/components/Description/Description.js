import React from "react";
import PropTypes from "prop-types";

import descriptionStyles from "./Description.styles";

const propTypes = {
  ariaDescriptionId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  ariaDescriptionId: null,
};

function Description(props) {
  const { children, ariaDescriptionId } = props;

  return (
    <div id={ariaDescriptionId} css={descriptionStyles} data-qa-anchor="formElement.description">
      {children}
    </div>
  );
}

Description.displayName = "FormElement.Description";

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
