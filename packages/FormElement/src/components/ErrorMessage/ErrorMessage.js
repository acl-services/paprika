import React from "react";
import PropTypes from "prop-types";

import ExclamationCircleIcon from "@paprika/icon/lib/ExclamationCircle";

import errorMessageStyles, { iconStyles } from "./ErrorMessage.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
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

export default ErrorMessage;
