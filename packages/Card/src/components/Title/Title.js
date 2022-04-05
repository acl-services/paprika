import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Title.styles";

const propTypes = {
  /** Body content of the Title. */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Title = props => {
  const { children, ...moreProps } = props;
  return (
    <sc.Title data-pka-anchor="card.title" level={2} {...moreProps}>
      {children}
    </sc.Title>
  );
};

Title.displayName = "Title";
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
