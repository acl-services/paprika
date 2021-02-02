import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import isNil from "lodash/isNil";
import * as constants from "@paprika/constants/lib/Constants";
import { FieldsetContext } from "./components/Content/Content";
import Content from "./components/Content";
import Description from "./components/Description";
import Error from "./components/Error";
import Instructions from "./components/Instructions";
import Label from "./components/Label";
import Layout from "./components/Layout";
import * as sc from "./FormElement.styles";

export const FormElementContext = React.createContext({});

function FormElement(props) {
  const { id, children, isDisabled, isOptional, isRequired, size, hasFieldSet, ...moreProps } = props;
  const { fieldsetAriaDescribedBy } = React.useContext(FieldsetContext);
  const [ariaDescribedBy, setAriaDescribedBy] = React.useState({});
  const [uniqueInputId] = React.useState(() => `form-element-input_${uuidv4()}`);
  const refLabel = React.useRef(null);

  const generateLabelId = id => (isNil(id) || id === "" ? uniqueInputId : id);
  const labelId = generateLabelId(id);

  const addIdToAriaDescribedBy = idObject => {
    setAriaDescribedBy(ariaDescribedBy => ({ ...idObject, ...ariaDescribedBy }));
  };

  if (!ariaDescribedBy.fieldsetAriaDescribedBy && fieldsetAriaDescribedBy) {
    addIdToAriaDescribedBy({ fieldsetAriaDescribedBy });
  }

  const contextValue = {
    addIdToAriaDescribedBy,
    ariaDescribedBy,
    hasFieldSet,
    isDisabled,
    isOptional,
    isRequired,
    labelId,
    refLabel,
  };

  return (
    <sc.FormElement as={hasFieldSet ? "fieldset" : "div"} size={size} isDisabled={isDisabled} {...moreProps}>
      <FormElementContext.Provider value={contextValue}>{children}</FormElementContext.Provider>
    </sc.FormElement>
  );
}

FormElement.types = {
  size: constants.defaultSize,
};

const propTypes = {
  /** FormElement sub components and layout elements. */
  children: PropTypes.node.isRequired,

  /** FormElement contains multiple children so Renders a legend element instead of label. */
  hasFieldSet: PropTypes.bool,

  /** id attribute for the input field DOM element (will be auto-generated if not supplied). */
  id: PropTypes.string,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** If input is an optional field and should be indicated. */
  isOptional: PropTypes.bool,

  /** If input is a required field. */
  isRequired: PropTypes.bool,

  /** Size of the label, error, help and description (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([FormElement.types.size.SMALL, FormElement.types.size.MEDIUM, FormElement.types.size.LARGE]),
};

const defaultProps = {
  hasFieldSet: false,
  id: "",
  isDisabled: false,
  isOptional: false,
  isRequired: false,
  size: FormElement.types.size.MEDIUM,
};

FormElement.displayName = "FormElement";
FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;

FormElement.Content = Content;
FormElement.Description = Description;
FormElement.Error = Error;
FormElement.Instructions = Instructions;
FormElement.Label = Label;
FormElement.Layout = Layout;

export default FormElement;
