import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import * as sc from "./Header.styles";

const propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Callback to be executed when the button is clicked or activated. */
  onButtonClick: PropTypes.func,

  /** Render an icon. */
  icon: PropTypes.node,
};

const defaultProps = {
  children: null,
  onButtonClick: () => {},
  icon: null,
};

function Header(props) {
  const { children, onButtonClick, icon } = props;

  const headerProps = {
    children,
    onButtonClick,
    icon,
  };

  return (
    <sc.Header data-pka-anchor="card.header" {...headerProps}>
      {children}
      {onButtonClick ? (
        <Button.Icon
          kind="minor"
          data-pka-anchor="card.headericon"
          data-qa-anchor="paprika.card.headericon"
          onClick={onButtonClick}
        >
          {icon}
        </Button.Icon>
      ) : null}
    </sc.Header>
  );
}

Header.displayName = "Card.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
