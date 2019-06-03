import React from "react";

const propTypes = {
  /**
   * Hide the close button
   */
  // hasCloseButton: PropTypes.bool,
  /**
   * css z-index for the header
   */
  // zIndex: PropTypes.number,
  /** Heading level for primary <h> element (does not affect appearance). */
  // headingLevel: PropTypes.number,
};

const defaultProps = {};

export default function Header() {
  return <React.Fragment />;
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
