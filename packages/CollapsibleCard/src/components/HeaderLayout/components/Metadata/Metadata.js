import React from "react";
import PropTypes from "prop-types";

export default function Metadata(props) {
  const { children } = props;
  return <div>{children}</div>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Metadata.propTypes = propTypes;
Metadata.defaultProps = defaultProps;
Metadata.displayName = "HeaderLayout.Metadata";
