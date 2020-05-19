import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Title.styles";

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
    <sc.titleStyles data-pka-anchor="card.title" {...props}>
      {children}
    </sc.titleStyles>
  );
};

Title.displayName = "Title";
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
