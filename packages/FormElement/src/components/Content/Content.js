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
  outerAriaDescribedBy: PropTypes.string,
};

const defaultProps = {
  idForLabel: null,
  ariaDescribedBy: null,
  refLabel: null,
  outerAriaDescribedBy: null,
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
  let labelRefSet = false;
  const { children, idForLabel, refLabel, outerAriaDescribedBy, ...moreProps } = props;
  const ariaDescribedBy = `${props.ariaDescribedBy} ${outerAriaDescribedBy}`;

  const extractedChildren = extractChildren(children, Object.values(supportedComponentNames));

  const getIdProp = () => {
    // ensure the id for lable is only set on one element
    const idProp = !labelRefSet ? { id: idForLabel } : null;

    if (idProp) {
      labelRefSet = true;
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

  const getAccessibleElement = (elements, cloneFn) => {
    return Array.isArray(elements) ? elements.map(cloneFn) : cloneFn(elements);
  };

  function renderInput() {
    const extractedInputs = extractedChildren[supportedComponentNames.Input];
    if (extractedInputs) {
      return getAccessibleElement(extractedInputs, cloneWithAriaDescribedByAndLabelId);
    }

    return null;
  }

  function renderCheckboxes() {
    const extractedCheckboxes = extractedChildren[supportedComponentNames.Checkbox];
    if (extractedCheckboxes) {
      return getAccessibleElement(extractedCheckboxes, cloneWithAriaDescribedBy);
    }

    return null;
  }

  function renderRadioGroup() {
    const extractedRadioGroup = extractedChildren[supportedComponentNames.RadioGroup];
    if (extractedRadioGroup) {
      const radioElements = extractedRadioGroup.props.children.map(cloneWithAriaDescribedBy);
      return React.cloneElement(extractedRadioGroup, {
        children: radioElements,
      });
    }

    return null;
  }

  function renderTimePicker() {
    const extractedTimePicker = extractedChildren[supportedComponentNames.TimePicker];
    if (extractedTimePicker) {
      return cloneWithAriaDescribedByAndLabelId(extractedTimePicker);
    }

    return null;
  }

  function renderDatePicker() {
    const extractedDatePicker = extractedChildren[supportedComponentNames.DatePicker];
    if (extractedDatePicker) {
      const dataPickerInput = cloneWithAriaDescribedByAndLabelId(extractedDatePicker.props.children);
      return React.cloneElement(extractedDatePicker, {
        children: dataPickerInput,
      });
    }

    return null;
  }

  function renderOtherChildren() {
    const elementClone = element => {
      if (element.type === "input") {
        return cloneWithAriaDescribedByAndLabelId(element);
      }
      return element;
    };

    return extractedChildren.children.map(elementClone);
  }

  function renderListBox() {
    const extractedListBox = extractedChildren[supportedComponentNames.ListBox];
    if (extractedListBox) {
      return React.cloneElement(extractedListBox, {
        refLabel,
      });
    }

    return null;
  }

  if (!children) {
    return null;
  }

  function renderFormElement() {
    const extractedFormElement = extractedChildren[supportedComponentNames.FormElement];
    if (extractedFormElement) {
      const formElementChildren = extractedFormElement.map(formElement => {
        return formElement.props.children.map(item => {
          if (item.type.displayName === "FormElement.Content") {
            return React.cloneElement(item, { outerAriaDescribedBy: ariaDescribedBy });
          }
          return item;
        });
      });

      return extractedFormElement.map((formElement, index) => {
        return React.cloneElement(formElement, { children: formElementChildren[index] });
      });
    }

    return null;
  }

  return (
    <sc.ContentContainer data-pka-anchor="form-element.content" {...moreProps}>
      {renderInput()}
      {renderCheckboxes()}
      {renderRadioGroup()}
      {renderDatePicker()}
      {renderListBox()}
      {renderFormElement()}
      {renderTimePicker()}
      {renderOtherChildren()}
    </sc.ContentContainer>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
