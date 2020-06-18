import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/enums";
import * as sc from "./Card.styles";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Metadata from "./components/Metadata";
import Header from "./components/Header";
import Text from "./components/Text";
import Content from "./components/Content";

const propTypes = {
  /** Body content of the card. */
  children: PropTypes.node,

  /** If the width of the card should span it's parent container (100%). */
  isFullWidth: PropTypes.bool,

  /** If the height of the card should span the height of its children elements. */
  isAutoHeight: PropTypes.bool,

  /** If the card is in an "active" or "selected" state. */
  isActive: PropTypes.bool,

  /** Size of the card (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  children: null,
  size: ShirtSizes.MEDIUM,
  isFullWidth: false,
  isAutoHeight: false,
  isActive: false,
};

function Card(props) {
  const { children, size, isFullWidth, isAutoHeight, isActive } = props;

  const cardProps = {
    children,
    size,
    isFullWidth,
    isAutoHeight,
    isActive,
  };

  return (
    <sc.cardStyles {...cardProps} data-pka-anchor="card">
      {children}
    </sc.cardStyles>
  );
}

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
