import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers/lib/customPropTypes";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import * as sc from "./Content.styles";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /** Sets id for label */
  idForLabel: PropTypes.string,
  refLabel: RefOf(),
  /** Used for aria-describedby on the FormElement */
  ariaDescribedBy: PropTypes.string,
  /** Used when form Elements are nested and is automatically appended to aria-describedby */
  wrapperAriaDescribedBy: PropTypes.string,
};

const defaultProps = {
  idForLabel: null,
  ariaDescribedBy: null,
  refLabel: null,
  wrapperAriaDescribedBy: "",
};

const supportedComponentNames = {
  Input: "Input",
  Checkbox: "Checkbox",
  RadioGroup: "Radio.Group",
  DatePicker: "DatePicker",
  ListBox: "ListBox",
  FormElement: "FormElement",
  TimePicker: "TimePicker",
};

function Content(props) {
  let isLabelRefSet = false;
  const { children, idForLabel, refLabel, wrapperAriaDescribedBy, ...moreProps } = props;
  const ariaDescribedBy = `${props.ariaDescribedBy} ${wrapperAriaDescribedBy}`;

  const extractedChildren = extractChildren(children, Object.values(supportedComponentNames));

  const getIdProp = () => {
    // ensure the id for lable is only set on one element
    const idProp = !isLabelRefSet ? { id: idForLabel } : null;

    if (idProp) {
      isLabelRefSet = true;
    }
    return idProp;
  };

  const cloneWithAriaDescribedByAndLabelId = input =>
    React.cloneElement(input, {
      "aria-describedby": ariaDescribedBy,
      ...getIdProp(),
    });

  const cloneWithAriaDescribedBy = item =>
    React.cloneElement(item, {
      "aria-describedby": ariaDescribedBy,
    });

  const getAccessibleElement = (elements, cloneFn) =>
    Array.isArray(elements) ? elements.map(cloneFn) : cloneFn(elements);

  const renderInput = extractedInputs => getAccessibleElement(extractedInputs, cloneWithAriaDescribedByAndLabelId);

  const renderCheckboxes = extractedCheckboxes => getAccessibleElement(extractedCheckboxes, cloneWithAriaDescribedBy);

  const renderRadioGroup = extractedRadioGroup => {
    const radioElements = extractedRadioGroup.props.children.map(cloneWithAriaDescribedBy);
    return React.cloneElement(extractedRadioGroup, {
      children: radioElements,
    });
  };

  const renderTimePicker = extractedTimePicker => cloneWithAriaDescribedByAndLabelId(extractedTimePicker);

  const renderDatePicker = extractedDatePicker => {
    const dataPickerInput = cloneWithAriaDescribedByAndLabelId(extractedDatePicker.props.children);
    return React.cloneElement(extractedDatePicker, {
      children: dataPickerInput,
    });
  };

  const renderOtherChildren = children => {
    const elementClone = element => {
      if (element.type === "input") {
        return cloneWithAriaDescribedByAndLabelId(element);
      }
      return element;
    };
    return children.map(elementClone);
  };

  const renderListBox = extractedListBox =>
    React.cloneElement(extractedListBox, {
      refLabel,
    });

  const renderFormElement = extractedFormElement => {
    const formElementChildren = extractedFormElement.map(formElement =>
      formElement.props.children.map(item => {
        if (item.type.displayName === "FormElement.Content") {
          return React.cloneElement(item, { wrapperAriaDescribedBy: ariaDescribedBy });
        }
        return item;
      })
    );

    return extractedFormElement.map((formElement, index) =>
      React.cloneElement(formElement, { children: formElementChildren[index] })
    );
  };

  const renderFunctionMap = {
    Input: renderInput,
    Checkbox: renderCheckboxes,
    "Radio.Group": renderRadioGroup,
    DatePicker: renderDatePicker,
    ListBox: renderListBox,
    FormElement: renderFormElement,
    TimePicker: renderTimePicker,
    children: renderOtherChildren,
  };

  function renderExtractedChildren() {
    for (const [key, value] of Object.entries(extractedChildren)) {
      return renderFunctionMap[key](value);
    }
  }

  if (!children) {
    return null;
  }

  return (
    <sc.ContentContainer data-pka-anchor="form-element.content" {...moreProps}>
      {renderExtractedChildren()}
    </sc.ContentContainer>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
