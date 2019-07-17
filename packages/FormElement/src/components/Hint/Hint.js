import React from "react";
import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import { extractChildren } from "../../helpers/extractChildren";

const propTypes = {};

const defaultProps = {
  isDisabled: false,
  isInline: false,
  isOptional: false,
  isReadOnly: false,
  isRequired: false,
  size: "medium",
};

function Hint(props) {
  const { children } = props;

  return <span>{children}</span>;
}

Hint.displayName = "FormElement.Hint";

Hint.propTypes = propTypes;
Hint.defaultProps = defaultProps;

export default Hint;
