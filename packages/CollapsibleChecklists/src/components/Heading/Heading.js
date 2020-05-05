import React from "react";
import PropTypes from "prop-types";
import headingStyles from "./Heading.styles";

const propTypes = {
  /** Content of the heading  */
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

const Heading = ({ children }) => <div css={headingStyles}>{children}</div>;

Heading.displayName = "Heading";
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
