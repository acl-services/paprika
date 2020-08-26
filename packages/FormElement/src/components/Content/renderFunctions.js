import React from "react";

const cloneWithAriaAttributes = ({ element, idForLabel, ariaDescribedBy, ariaDescribedByProp }) =>
  React.cloneElement(element, {
    "aria-describedby": ariaDescribedBy,
    ariaDescribedBy: ariaDescribedByProp,
    id: idForLabel,
  });

const getAccessibleElement = (elements, cloneFn) =>
  Array.isArray(elements) ? elements.map(cloneFn) : cloneFn(elements);

export default {
  Input: ({ extractedElements, idForLabel, ariaDescribedBy }) =>
    getAccessibleElement(extractedElements, (element, index = 0) =>
      cloneWithAriaAttributes({ element, idForLabel: index === 0 ? idForLabel : null, ariaDescribedBy })
    ),
  Checkbox: ({ extractedElements, ariaDescribedBy }) =>
    getAccessibleElement(extractedElements, element =>
      cloneWithAriaAttributes({ element, ariaDescribedByProp: ariaDescribedBy })
    ),
  "Radio.Group": ({ extractedElements, ariaDescribedBy }) => {
    const radioElements = extractedElements.props.children.map(element =>
      cloneWithAriaAttributes({ element, ariaDescribedByProp: ariaDescribedBy })
    );
    return React.cloneElement(extractedElements, {
      children: radioElements,
    });
  },
  TimePicker: ({ extractedElements, ariaDescribedBy, idForLabel }) =>
    cloneWithAriaAttributes({ element: extractedElements, ariaDescribedBy, idForLabel }),
  DatePicker: ({ extractedElements, ariaDescribedBy, idForLabel }) => {
    const datePickerInput = cloneWithAriaAttributes({
      element: extractedElements.props.children,
      ariaDescribedBy,
      idForLabel,
    });
    return React.cloneElement(extractedElements, {
      children: datePickerInput,
    });
  },
  children: ({ extractedElements, ariaDescribedBy, idForLabel }) => {
    const elementClone = (element, index = 0) =>
      element.type === "input"
        ? cloneWithAriaAttributes({ element, idForLabel: index === 0 ? idForLabel : null, ariaDescribedBy })
        : element;
    return extractedElements.map(elementClone);
  },
  ListBox: ({ extractedElements, refLabel }) =>
    React.cloneElement(extractedElements, {
      refLabel,
    }),
  FormElement: ({ extractedElements, ariaDescribedBy }) => {
    const formElementChildren = extractedElements.map(formElement =>
      formElement.props.children.map(item =>
        item.type.displayName === "FormElement.Content"
          ? React.cloneElement(item, { wrapperAriaDescribedBy: ariaDescribedBy })
          : item
      )
    );

    return extractedElements.map((formElement, index) =>
      React.cloneElement(formElement, { children: formElementChildren[index] })
    );
  },
};
