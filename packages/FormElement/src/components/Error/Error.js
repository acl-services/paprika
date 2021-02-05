import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { FormElementContext } from "../../FormElement";
import * as sc from "./Error.styles";

function Error(props) {
  const { children, ...moreProps } = props;
  const { addIdToAriaDescribedBy } = React.useContext(FormElementContext);
  const [ariaErrorId] = React.useState(() => `form-element-aria-error_${uuidv4()}`);

  React.useEffect(() => {
    if (addIdToAriaDescribedBy) addIdToAriaDescribedBy({ ariaErrorId });
  }, []);

  if (!children) return null;

  return (
    <sc.Error data-pka-anchor="form-element.error" {...moreProps} id={ariaErrorId}>
      <sc.ErrorIcon />
      {children}
    </sc.Error>
  );
}

const propTypes = {
  /** Content of the error message */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Error.displayName = "FormElement.Error";
Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
