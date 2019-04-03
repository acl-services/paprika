import React from "react";
import PropTypes from "prop-types";
/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /** String, number or JSX content */
  children: PropTypes.node.isRequired,

  /** Describe if the option is selected or not */
  isSelected: PropTypes.bool,

  /** Describe if the option is enable or not */
  isDisabled: PropTypes.bool,

  /** Describe if the option is hidden or not */
  isHidden: PropTypes.bool,

  /** Describe if the option will be accept click or any other keyboard interaction
      this is helpful when you want to add an option that help visually to trasmit the
      UI message better.
  */
  isInteractive: PropTypes.bool,

  /** When the children are not a String, label should need to be add so the filter can work  */
  label: PropTypes.string,

  /** Callback for the clicking event */
  onClick: PropTypes.func,

  /** Value of your option this can be any data structure  */
  value: PropTypes.any, // eslint-disable-line

  /** Let you render your own checker for a specific option  */
  renderChecker: PropTypes.func,
};
/* eslint-enable react/no-unused-prop-types */

const defaultProps = {
  isDisabled: false,
  isHidden: false,
  isInteractive: true,
  isSelected: false,
  label: null,
  onClick: null,
  renderChecker: null,
  value: null,
};

export default function Option(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

Option.componentType = "ListBox.Option";
Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
