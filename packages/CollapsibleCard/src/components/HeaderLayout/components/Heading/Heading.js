import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Heading.styles";

export default function HeaderLayoutHeading(props) {
  const { a11yHeadingLevel, children } = props;
  return (
    <sc.HeaderLayoutHeading displayLevel={4} level={a11yHeadingLevel}>
      {children}
    </sc.HeaderLayoutHeading>
  );
}

const propTypes = {
  a11yHeadingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
};

const defaultProps = {
  a11yHeadingLevel: 2,
  children: null,
};

HeaderLayoutHeading.propTypes = propTypes;
HeaderLayoutHeading.defaultProps = defaultProps;
HeaderLayoutHeading.displayName = "HeaderLayout.Heading";
