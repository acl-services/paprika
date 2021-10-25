import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Card.styles";

function Card(props) {
  const { children, size, isActive, ...moreProps } = props;

  const styleProps = {
    size,
    isActive,
  };

  return (
    <sc.Card data-pka-anchor="card" data-pka-size={size} {...styleProps} {...moreProps}>
      {children}
    </sc.Card>
  );
}

Card.types = {
  size: constants.autoSize,
};

const propTypes = {
  /** Body content of the card. */
  children: PropTypes.node,

  /** If the card is in an "active" or "selected" state. */
  isActive: PropTypes.bool,

  /** Size of the card (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([Card.types.size.MEDIUM, Card.types.size.LARGE]),
};

const defaultProps = {
  children: null,
  size: Card.types.size.MEDIUM,
  isActive: false,
};

Card.displayName = "Card";
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
