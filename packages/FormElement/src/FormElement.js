import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./FormElement.styles";

export const FormElementContext = React.createContext({});

function FormElement(props) {
  const { children, isDisabled, isInline, size, hasFieldSet, formElementA11yProps, ...moreProps } = props;

  const value = {
    formElementA11yProps,
    hasFieldSet,
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
  formElementA11yProps: PropTypes.shape({
    labelA11yProps: PropTypes.shape({ id: PropTypes.string, ref: PropTypes.node }),
    instructionsA11yProps: PropTypes.shape({ id: PropTypes.string }),
    descriptionA11yProps: PropTypes.shape({ id: PropTypes.string }),
    errorA11yProps: PropTypes.shape({ id: PropTypes.string }),
  }),

  children: PropTypes.node.isRequired,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should label and children be inline or not, default is false. */
  isInline: PropTypes.bool,

  /** Size of the label, error, help and description (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([FormElement.types.size.SMALL, FormElement.types.size.MEDIUM, FormElement.types.size.LARGE]),

  /** FormElement contains multiple children so Renders a legend element instead of label. */
  hasFieldSet: PropTypes.bool,
};

const defaultProps = {
  formElementA11yProps: null,
  isDisabled: false,
  isInline: false,
  size: FormElement.types.size.MEDIUM,
  hasFieldSet: false,
};

FormElement.displayName = "FormElement";
FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;

export default FormElement;
