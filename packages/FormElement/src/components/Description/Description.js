import React from "react";
import PropTypes from "prop-types";

import descriptionStyles from "./Description.styles";

const propTypes = {
  ariaDescriptionId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Description(props) {
  const { children, ariaDescriptionId } = props;

  return (
    <div id={ariaDescriptionId} css={descriptionStyles}>
      {children}
    </div>
  );
}

Description.displayName = "FormElement.Description";

Description.propTypes = propTypes;

export default Description;
