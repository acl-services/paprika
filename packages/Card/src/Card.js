import React from "react";
import PropTypes from "prop-types";
import cardStyles from "./Card.styles";
import Footer from "./components/Footer";
import Title from "./components/Title";
import MetaData from "./components/MetaData";
import Header from "./components/Header";
import Text from "./components/Text";
import Seperator from "./components/Seperator";

const propTypes = {
  /** Body content of the button. */
  children: PropTypes.node,

  /** If the button is in an "active" or "selected" state. */
  // isActive: PropTypes.bool,

  /** If the button is disabled. */
  // isDisabled: PropTypes.bool,

  /** Callback to be executed when the button is clicked or activated by keyboard. Typically required. */
  // onClick: PropTypes.func,
};

const defaultProps = {
  children: null,
  // isActive: false,
  // isDisabled: false,
  // onClick: () => {},
};

const Card = props => {
  const { children } = props;

  return (
    <div css={cardStyles} data-pka-anchor="card">
      {children}
    </div>
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

export default Card;
