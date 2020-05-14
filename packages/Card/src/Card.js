import React from "react";
import PropTypes from "prop-types";
import cardStyles from "./Card.styles";
import Title from "./components/Title";

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

Card.Title = Title;

Card.displayName = "Card";
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
