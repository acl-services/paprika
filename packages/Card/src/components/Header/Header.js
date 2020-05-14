import React from "react";
import PropTypes from "prop-types";

import headerStyles from "./Header.styles";

const propTypes = {
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
    <div data-pka-anchor="card.header" css={headerStyles} {...headerProps}>
      {children}
    </div>
  );
}

Header.displayName = "Card.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
