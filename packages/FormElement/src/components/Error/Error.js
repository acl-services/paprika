import React from "react";
import PropTypes from "prop-types";
import ExclamationCircleIcon from "@paprika/icon/lib/ExclamationCircle";
import { FormElementContext } from "../../FormElement";
import errorStyles, { iconStyles } from "./Error.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function Error(props) {
  const { formElementA11yProps } = React.useContext(FormElementContext);
  const { children, ...moreProps } = props;

  if (!children) return null;

  const a11yProps = formElementA11yProps ? { id: formElementA11yProps.errorA11yProps.id } : {};

  return (
    <div role="alert" css={errorStyles} data-pka-anchor="form-element.error" {...moreProps} {...a11yProps}>
      <ExclamationCircleIcon css={iconStyles} />
      {children}
    </div>
  );
}

Error.displayName = "FormElement.Error";

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
