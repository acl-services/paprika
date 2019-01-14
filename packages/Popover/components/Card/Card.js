import React from "react";
import { node } from "prop-types";
import { PopoverContext } from "../../Popover";
import CardStyled from "./Card.styles";

const Card = ({ children }) => (
  <PopoverContext.Consumer>
    {({ isDark }) => <CardStyled isDark={isDark}>{children}</CardStyled>}
  </PopoverContext.Consumer>
);

Card.displayName = "Popover.Card";

Card.propTypes = {
  children: node.isRequired,
};

export default Card;
