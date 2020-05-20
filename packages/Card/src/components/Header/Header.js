import React from "react";
import PropTypes from "prop-types";

import * as sc from "./Header.styles";

const propTypes = {
  /** Primary content. */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function Header(props) {
  const { children } = props;

  const headerProps = {
    children,
  };

  return (
    <sc.Header data-pka-anchor="card.header" {...headerProps}>
      {children}
    </sc.Header>
  );
}

Header.displayName = "Card.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
