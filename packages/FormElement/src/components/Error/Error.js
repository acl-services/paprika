import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import * as constants from "@paprika/constants/lib/Constants";
import { FormElementContext } from "../../FormElement";
import * as sc from "./Error.styles";

function Error(props) {
  const { children, size, ...moreProps } = props;
  const { addIdToAriaDescribedBy } = React.useContext(FormElementContext);
  const [ariaErrorId] = React.useState(() => `form-element-aria-error_${uuidv4()}`);

  React.useEffect(() => {
    if (addIdToAriaDescribedBy) addIdToAriaDescribedBy({ ariaErrorId });
  }, []);

  if (!children) return null;

  return (
    <sc.Error data-pka-anchor="form-element.error" {...moreProps} id={ariaErrorId} size={size}>
      <sc.ErrorIcon />
      {children}
    </sc.Error>
  );
}

Error.types = {
  size: constants.defaultSize,
};

const propTypes = {
  /** Content of the error message */
  children: PropTypes.node,
  size: PropTypes.oneOf[(Error.types.size.MEDIUM, Error.types.size.LARGE)],
};

const defaultProps = {
  children: null,
  size: Error.types.size.MEDIUM,
};

Error.displayName = "FormElement.Error";
Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
