import React from "react";
import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import { extractChildren } from "../../helpers/extractChildren";

import descriptionStyles from "./Description.styles";

const propTypes = {};

const defaultProps = {
  isDisabled: false,
  isInline: false,
  isOptional: false,
  isReadOnly: false,
  isRequired: false,
  size: "medium",
};

function Description(props) {
  const { children } = props;

  return <div css={descriptionStyles}>{children}</div>;
}

Description.displayName = "FormElement.Description";

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
