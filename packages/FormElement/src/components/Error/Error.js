import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
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
  const [ariaErrorId] = React.useState(nanoid);
  const { addIdToAriaDescribedBy } = React.useContext(FormElementContext);
  const { children, ...moreProps } = props;

  React.useEffect(() => {
    addIdToAriaDescribedBy({ ariaErrorId });
  }, []);

  if (!children) return null;

  return (
    <div css={errorStyles} data-pka-anchor="form-element.error" {...moreProps} id={ariaErrorId}>
      <ExclamationCircleIcon css={iconStyles} />
      {children}
    </div>
  );
}

Error.displayName = "FormElement.Error";

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
