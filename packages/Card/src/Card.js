import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Card.styles";
import Footer from "./components/Footer";
import Title from "./components/Title";
import MetaData from "./components/MetaData";
import Header from "./components/Header";
import Text from "./components/Text";
import Seperator from "./components/Seperator";
import Content from "./components/Content";

const propTypes = {
  /** Body content of the button. */
  children: PropTypes.node,

  /** If the button is in an "active" or "selected" state. */
  // isActive: PropTypes.bool,

  /** If the button is disabled. */
  // isDisabled: PropTypes.bool,

  /** Callback to be executed when the button is clicked or activated by keyboard. Typically required. */
  // onClick: PropTypes.func,

  /** Size of the card (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  children: null,
  size: ShirtSizes.MEDIUM,
  // isActive: false,
  // isDisabled: false,
  // onClick: () => {},
};

const Card = props => {
  const { children, size } = props;

  const cardProps = {
    children,
    size,
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
Card.MetaData = MetaData;
Card.Footer = Footer;
Card.Text = Text;
Card.Seperator = Seperator;
Card.Content = Content;

export default Card;
