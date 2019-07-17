import React from "react";
import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import { extractChildren } from "../../helpers/extractChildren";

import ExclamationCircleIcon from "@paprika/icon/lib/ExclamationCircle";

import errorMessageStyles, { iconStyles } from "./ErrorMessage.styles";

const propTypes = {};

const defaultProps = {
  isDisabled: false,
  isInline: false,
  isOptional: false,
  isReadOnly: false,
  isRequired: false,
  size: "medium",
};

function ErrorMessage(props) {
  const { children } = props;

  return (
    <div css={errorMessageStyles}>
      <ExclamationCircleIcon css={iconStyles} />
      {children}
    </div>
  );
}

ErrorMessage.displayName = "FormElement.Error";

ErrorMessage.propTypes = propTypes;
ErrorMessage.defaultProps = defaultProps;

export default ErrorMessage;
