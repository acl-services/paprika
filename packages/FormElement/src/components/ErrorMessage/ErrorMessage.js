import React from "react";
import PropTypes from "prop-types";

import ExclamationCircleIcon from "@paprika/icon/lib/ExclamationCircle";

import errorMessageStyles, { iconStyles } from "./ErrorMessage.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function ErrorMessage(props) {
  const { children } = props;

  if (!children) return null;

  return (
    <div css={errorMessageStyles} data-qa-anchor="formElement.error">
      <ExclamationCircleIcon css={iconStyles} />
      {children}
    </div>
  );
}

ErrorMessage.displayName = "FormElement.Error";

ErrorMessage.propTypes = propTypes;
ErrorMessage.defaultProps = defaultProps;

export default ErrorMessage;
