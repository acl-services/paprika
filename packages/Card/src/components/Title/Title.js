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

const safeValue = n => (n === undefined || n < 1 || Number.isNaN(n) ? 6 : Math.min(n, 6));

const Title = props => {
  const { children, level } = props;
  const safeLevel = safeValue(level);
  return (
    <sc.titleStyles data-pka-anchor="card.title" as={`h${safeLevel}`} {...props}>
      {children}
    </sc.titleStyles>
  );
};

Title.displayName = "Title";
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
