import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import isNil from "lodash/isNil";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./FormElement.styles";

export const FormElementContext = React.createContext({});

function FormElement(props) {
  const { id, wrapperAriaDescribedBy, children, isDisabled, isInline, size, hasFieldSet, ...moreProps } = props;
  const [ariaDescribedBy, setAriaDescribedBy] = React.useState({});
  const uniqueInputId = React.useRef(nanoid()).current;
  const generateLabelId = id => (isNil(id) || id === "" ? uniqueInputId : id);
  const idForLabel = generateLabelId(id);
  const refLabel = React.useRef(null);

  const addIdToAriaDescribedBy = idObject => {
    setAriaDescribedBy(ariaDescribedBy => ({ ...idObject, ...ariaDescribedBy }));
  };

  if (!ariaDescribedBy.wrapperAriaDescribedBy && wrapperAriaDescribedBy) {
    addIdToAriaDescribedBy({ wrapperAriaDescribedBy });
  }

  const value = {
    hasFieldSet,
    refLabel,
    idForLabel,
    ariaDescribedBy,
    addIdToAriaDescribedBy,
  };

  return (
    <sc.FormElement
      as={hasFieldSet ? "fieldset" : "div"}
      isInline={isInline}
      size={size}
      isDisabled={isDisabled}
      {...moreProps}
    >
      <FormElementContext.Provider value={value}>{children}</FormElementContext.Provider>
    </sc.FormElement>
  );
}

FormElement.types = {
  size: constants.defaultSize,
};

const propTypes = {
  id: PropTypes.string,

  children: PropTypes.node.isRequired,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should label and children be inline or not, default is false. */
  isInline: PropTypes.bool,

  /** Size of the label, error, help and description (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([FormElement.types.size.SMALL, FormElement.types.size.MEDIUM, FormElement.types.size.LARGE]),

  /** FormElement contains multiple children so Renders a legend element instead of label. */
  hasFieldSet: PropTypes.bool,

  /** Aria-describedBy ids comoing from wrapping fieldset component. */
  wrapperAriaDescribedBy: PropTypes.string,
};

const defaultProps = {
  hasFieldSet: false,
  id: "",
  isDisabled: false,
  isInline: false,
  size: FormElement.types.size.MEDIUM,
  wrapperAriaDescribedBy: "",
};

FormElement.displayName = "FormElement";
FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;

export default FormElement;
