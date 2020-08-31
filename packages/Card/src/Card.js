import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Metadata from "./components/Metadata";
import Header from "./components/Header";
import Text from "./components/Text";
import Content from "./components/Content";
import * as sc from "./Card.styles";

function Card(props) {
  const { children, size, isFullWidth, isActive, ...moreProps } = props;

  const styleProps = {
    size,
  };

  return (
    <sc.cardStyles data-pka-anchor="card" {...styleProps} {...moreProps}>
      {children}
    </sc.cardStyles>
  );
}

Card.types = {
  size: constants.autoSize,
};

const propTypes = {
  /** Body content of the card. */
  children: PropTypes.node,

  /** If the width of the card should span it's parent container (100%). */
  isFullWidth: PropTypes.bool,

  /** If the card is in an "active" or "selected" state. */
  isActive: PropTypes.bool,

  /** Size of the card (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([Card.types.size.AUTO, Card.types.size.SMALL, Card.types.size.MEDIUM, Card.types.size.LARGE]),
};

const defaultProps = {
  children: null,
  size: Card.types.size.AUTO,
  isFullWidth: false,
  isActive: false,
};

Card.displayName = "Card";
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

Card.Header = Header;
Card.Title = Title;
Card.Metadata = Metadata;
Card.Footer = Footer;
Card.Text = Text;
Card.Content = Content;

export default Card;
