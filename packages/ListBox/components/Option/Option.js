import React from "react";
import PropTypes from "prop-types";

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  idPrefix: PropTypes.string,
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
};
/* eslint-enable react/no-unused-prop-types */

const defaultProps = {
  idPrefix: "paprika",
  label: null,
  value: null,
};

export default function Option(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

Option.componentType = "ListBox.Option";
Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
