import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Title.styles";

const propTypes = {
  /** Body content of the Title. */
  children: PropTypes.node,
  /** Semantic level of Heading for the title */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

const defaultProps = {
  children: null,
  level: 2,
};

const Title = props => {
  const { children, level } = props;
  return (
    <sc.Title data-pka-anchor="card.title" level={level}>
      {children}
    </sc.Title>
  );
};

Title.displayName = "Title";
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
