import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import * as sc from "./Description.styles";
import { FormElementContext } from "../../FormElement";

const propTypes = {
  ariaDescriptionId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  ariaDescriptionId: null,
};

function Description(props) {
  const [ariaDescriptionId] = React.useState(nanoid);
  const { addIdToAriaDescribedBy } = React.useContext(FormElementContext);
  const { children, ...moreProps } = props;

  React.useEffect(() => {
    addIdToAriaDescribedBy({ ariaDescriptionId });
  }, []);

  return (
    <sc.Description data-pka-anchor="form-element.description" {...moreProps} id={ariaDescriptionId}>
      {children}
    </sc.Description>
  );
}

Description.displayName = "FormElement.Description";

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
