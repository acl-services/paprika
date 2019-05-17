import React from "react";
import PropTypes from "prop-types";
import PopoverContext from "../../PopoverContext";
import CardStyled from "./Card.styles";

const Card = ({ children }) => (
  <PopoverContext.Consumer>
    {({ isDark }) => <CardStyled isDark={isDark}>{children}</CardStyled>}
  </PopoverContext.Consumer>
);

Card.displayName = "Popover.Card";

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
