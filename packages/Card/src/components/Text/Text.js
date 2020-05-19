import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Text.styles";

const propTypes = {
  /** Body content of the button (an icon). */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Text = props => {
  const { children } = props;

  return (
    <sc.textStyles data-pka-anchor="card.text" {...props}>
      {children}
    </sc.textStyles>
  );
};

Text.displayName = "Text";
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
