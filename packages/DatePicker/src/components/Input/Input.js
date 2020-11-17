/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";

Input.propTypes = propTypes; // eslint-disable-line no-use-before-define
Input.defaultProps = defaultProps; // eslint-disable-line no-use-before-define
// eslint-disable-next-line no-use-before-define
Input.types = {
  size: constants.defaultSize,
};

const propTypes = {
  /** a11yText on the input. */
  a11yText: PropTypes.string,

  /** Custom clear icon */
  clearIcon: PropTypes.node,

  /** Placeholder of input. */
  placeholder: PropTypes.string,

  /** Size of input. */
  size: PropTypes.oneOf([
    Input.types.size.SMALL, // eslint-disable-line no-use-before-define
    Input.types.size.MEDIUM, // eslint-disable-line no-use-before-define
    Input.types.size.LARGE, // eslint-disable-line no-use-before-define
  ]),

  /** If the value of <input> is valid or not. */
  hasError: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  clearIcon: null,
  placeholder: "",
  size: Input.types.size.MEDIUM, // eslint-disable-line no-use-before-define
  hasError: false,
};

// shell component for enhancing development experience
function Input() {
  return <></>;
}

Input.displayName = "DatePicker.Input";

export default Input;
