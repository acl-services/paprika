import React from "react";
import PropTypes from "prop-types";
import textStyles from "./Text.styles";

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
    <p data-pka-anchor="card.text" css={textStyles} {...props}>
      {children}
    </p>
  );
};

Text.displayName = "Text";
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
