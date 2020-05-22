import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Card.styles";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Metadata from "./components/Metadata";
import Header from "./components/Header";
import Text from "./components/Text";
import Seperator from "./components/Seperator";
import Content from "./components/Content";

const propTypes = {
  /** Body content of the card. */
  children: PropTypes.node,

  /** If the width of the card should span it's parent container (100%). */
  isFullWidth: PropTypes.bool,

  /** If the card is in an "active" or "selected" state. */
  isActive: PropTypes.bool,

  /** If the card is disabled. */
  isDisabled: PropTypes.bool,

  /** Callback to be executed when the card is clicked or activated by keyboard. Typically required. */
  onClick: PropTypes.func,

  /** Size of the card (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  children: null,
  size: ShirtSizes.MEDIUM,
  isFullWidth: false,
  isActive: false,
  isDisabled: false,
  onClick: () => {},
};

const Card = props => {
  const { children, size, isFullWidth, isActive, isDisabled, onClick } = props;

  const cardProps = {
    children,
    size,
    isFullWidth,
    isActive,
    isDisabled,
    onClick,
  };

  return (
    <sc.cardStyles {...cardProps} data-pka-anchor="card">
      {children}
    </sc.cardStyles>
  );
};

Card.displayName = "Card";
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

Card.Header = Header;
Card.Title = Title;
Card.Metadata = Metadata;
Card.Footer = Footer;
Card.Text = Text;
Card.Seperator = Seperator;
Card.Content = Content;

export default Card;
