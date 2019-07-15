import React from "react";
import PropTypes from "prop-types";
import headingStyles from "./Heading.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

const Heading = ({ children }) => {
  return <div css={headingStyles}>{children}</div>;
};

Heading.displayName = "Heading";
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
