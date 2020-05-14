import React from "react";
import PropTypes from "prop-types";
import titleStyles from "./Title.styles";

const propTypes = {
  /** Body content of the button (an icon). */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Title = props => {
  const { children } = props;

  return (
    <h1 data-pka-anchor="card.title" css={titleStyles} {...props}>
      {children}
    </h1>
  );
};

Title.displayName = "Title";
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
