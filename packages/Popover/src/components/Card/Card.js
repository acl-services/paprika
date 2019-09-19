import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../PopoverContext";
import CardStyled from "./Card.styles";

function Card({ children, id }) {
  const isDark = React.useContext(ThemeContext);

  return (
    <CardStyled id={id} isDark={isDark}>
      {children}
    </CardStyled>
  );
}

Card.displayName = "Popover.Card";

Card.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

Card.defaultProps = {
  id: null,
};

export default Card;
