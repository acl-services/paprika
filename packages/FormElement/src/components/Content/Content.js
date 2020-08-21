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
};

function Content(props) {
  let labelRefSet = false;
  const { children, idForLabel, refLabel, outerAriaDescribedBy, ...moreProps } = props;
  const ariaDescribedBy = `${props.ariaDescribedBy} ${outerAriaDescribedBy}`;

  const extractedChildren = extractChildren(children, Object.values(supportedComponentNames));

  const cloneWithAriaDescribedByAndLabelId = input => {
    // ensure only the first input gets the id for labelRef
    const idProp = !labelRefSet ? { id: idForLabel } : null;

    if (idProp) {
      labelRefSet = true;
    }

    return React.cloneElement(input, {
      "aria-describedby": ariaDescribedBy,
      ...idProp,
    });
  };

  const cloneWithAriaDescribedBy = item =>
    React.cloneElement(item, {
      "aria-describedby": ariaDescribedBy,
    });

  function renderInput() {
    if (extractedChildren[supportedComponentNames.Input]) {
      return cloneWithAriaDescribedByAndLabelId(supportedComponentNames.Input);
    }

    return null;
  }

  function renderCheckboxes() {
    if (extractedChildren[supportedComponentNames.Checkbox]) {
      return extractedChildren[supportedComponentNames.Checkbox].map(cloneWithAriaDescribedBy);
    }

    return null;
  }

  function renderRadioGroup() {
    if (extractedChildren[supportedComponentNames.RadioGroup]) {
      const radioElements = extractedChildren[supportedComponentNames.RadioGroup].props.children.map(
        cloneWithAriaDescribedBy
      );
      return React.cloneElement(extractedChildren[supportedComponentNames.RadioGroup], {
        children: radioElements,
      });
    }

    return null;
  }

  function renderDatePicker() {
    if (extractedChildren[supportedComponentNames.DatePicker]) {
      const dataPickerInput = cloneWithAriaDescribedBy(
        extractedChildren[supportedComponentNames.DatePicker].props.children
      );
      return React.cloneElement(extractedChildren[supportedComponentNames.DatePicker], {
        children: dataPickerInput,
        id: idForLabel,
      });
    }

    return null;
  }

  function renderOtherChildren() {
    const elementClone = element => {
      if (element.type === "input") {
        return cloneWithAriaDescribedByAndLabelId(element);
      }
    };

    return extractedChildren.children.map(elementClone);
  }

  function renderListBox() {
    if (extractedChildren[supportedComponentNames.ListBox]) {
      return React.cloneElement(extractedChildren[supportedComponentNames.ListBox], {
        refLabel,
      });
    }

    return null;
  }

  if (!children) {
    return null;
  }

  function renderFormElement() {
    if (extractedChildren[supportedComponentNames.FormElement]) {
      const formElementChildren = extractedChildren[supportedComponentNames.FormElement].map(formElement => {
        return formElement.props.children.map(item => {
          if (item.type.displayName === "FormElement.Content") {
            return React.cloneElement(item, { outerAriaDescribedBy: ariaDescribedBy });
          }
          return item;
        });
      });

      return extractedChildren[supportedComponentNames.FormElement].map((formElement, index) => {
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
      {renderOtherChildren()}
    </sc.ContentContainer>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
