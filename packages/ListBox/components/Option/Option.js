import React from "react";
import PropTypes from "prop-types";

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /** String, number or JSX content */
  children: PropTypes.node.isRequired,

  /** Describe if the option is selected or not */
  isSelected: PropTypes.bool,

  /** When the children are not a String, label should need to be add so the filter can work  */
  label: PropTypes.string,

  /** Value the describe your option  */
  value: PropTypes.any, // eslint-disable-line
};
/* eslint-enable react/no-unused-prop-types */

const defaultProps = {
  isSelected: false,
  label: null,
  value: null,
};

export default function Option(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

Option.componentType = "ListBox.Option";
Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
