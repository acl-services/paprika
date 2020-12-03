import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import isNil from "lodash/isNil";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./FormElement.styles";
import { FieldsetContext } from "./components/Content/Content";
import Content from "./components/Content";
import Description from "./components/Description";
import Error from "./components/Error";
import Instructions from "./components/Instructions";
import Label from "./components/Label";
import Layout from "./components/Layout";

export const FormElementContext = React.createContext({});

function FormElement(props) {
  const { id, children, isDisabled, size, hasFieldSet, ...moreProps } = props;
  const { fieldsetAriaDescribedBy } = React.useContext(FieldsetContext);
  const [ariaDescribedBy, setAriaDescribedBy] = React.useState({});
  const [uniqueInputId] = React.useState(nanoid);
  const refLabel = React.useRef(null);

  const generateLabelId = id => (isNil(id) || id === "" ? uniqueInputId : id);
  const labelId = generateLabelId(id);

  const addIdToAriaDescribedBy = idObject => {
    setAriaDescribedBy(ariaDescribedBy => ({ ...idObject, ...ariaDescribedBy }));
  };

  if (!ariaDescribedBy.fieldsetAriaDescribedBy && fieldsetAriaDescribedBy) {
    addIdToAriaDescribedBy({ fieldsetAriaDescribedBy });
  }

  const value = {
    hasFieldSet,
    refLabel,
    labelId,
    ariaDescribedBy,
    addIdToAriaDescribedBy,
  };

  return (
    <sc.FormElement as={hasFieldSet ? "fieldset" : "div"} size={size} isDisabled={isDisabled} {...moreProps}>
      <FormElementContext.Provider value={value}>{children}</FormElementContext.Provider>
    </sc.FormElement>
  );
}

FormElement.types = {
  size: constants.defaultSize,
};

const propTypes = {
  /** id attribute for the input field DOM element (will be auto-generated if not supplied). */
  id: PropTypes.string,

  /** FormElement sub components and layout elements. */
  children: PropTypes.node.isRequired,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Size of the label, error, help and description (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([FormElement.types.size.SMALL, FormElement.types.size.MEDIUM, FormElement.types.size.LARGE]),

  /** FormElement contains multiple children so Renders a legend element instead of label. */
  hasFieldSet: PropTypes.bool,
};

const defaultProps = {
  hasFieldSet: false,
  id: "",
  isDisabled: false,
  size: FormElement.types.size.MEDIUM,
};

FormElement.displayName = "FormElement";
FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;

FormElement.Content = Content;
FormElement.Instructions = Instructions;
FormElement.Description = Description;
FormElement.Error = Error;
FormElement.Label = Label;
FormElement.Layout = Layout;

export default FormElement;
