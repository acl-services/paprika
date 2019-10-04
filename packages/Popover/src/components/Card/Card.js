import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../PopoverContext";
import CardStyled from "./Card.styles";

function Card({ children }) {
  const isDark = React.useContext(ThemeContext);

  return <CardStyled isDark={isDark}>{children}</CardStyled>;
}

Card.displayName = "Popover.Card";

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
