import React from "react";

const cloneWithAriaAttributes = ({ element, idForLabel, a11yDescribedByIds, isNative }) => {
  const a11yProps = {};

  if (a11yDescribedByIds && isNative) {
    a11yProps["aria-describedby"] = a11yDescribedByIds;
  }

  if (a11yDescribedByIds && !isNative) {
    a11yProps.a11yDescribedByIds = a11yDescribedByIds;
  }

  if (idForLabel) {
    a11yProps.id = idForLabel;
  }

  return React.cloneElement(element, {
    ...a11yProps,
  });
};

const getAccessibleElement = (elements, cloneFn) =>
  Array.isArray(elements) ? elements.map(cloneFn) : cloneFn(elements);

export default {
  Input: ({ extractedElements, idForLabel, a11yDescribedByIds }) =>
    getAccessibleElement(extractedElements, (element, index = 0) =>
      cloneWithAriaAttributes({ element, idForLabel: index === 0 ? idForLabel : null, a11yDescribedByIds })
    ),
  Checkbox: ({ extractedElements, a11yDescribedByIds }) =>
    getAccessibleElement(extractedElements, element => cloneWithAriaAttributes({ element, a11yDescribedByIds })),
  "Radio.Group": ({ extractedElements, a11yDescribedByIds }) =>
    getAccessibleElement(extractedElements, element => cloneWithAriaAttributes({ element, a11yDescribedByIds })),
  TimePicker: ({ extractedElements, a11yDescribedByIds, idForLabel }) =>
    cloneWithAriaAttributes({ element: extractedElements, a11yDescribedByIds, idForLabel }),
  DatePicker: ({ extractedElements, idForLabel, a11yDescribedByIds }) =>
    getAccessibleElement(extractedElements, (element, index = 0) =>
      cloneWithAriaAttributes({ element, idForLabel: index === 0 ? idForLabel : null, a11yDescribedByIds })
    ),
  children: ({ extractedElements, a11yDescribedByIds, idForLabel }) => {
    const elementClone = (element, index = 0) =>
      element.type === "input"
        ? cloneWithAriaAttributes({
            element,
            idForLabel: index === 0 ? idForLabel : null,
            a11yDescribedByIds,
            isNative: true,
          })
        : element;
    return extractedElements.map(elementClone);
  },
  ListBox: ({ extractedElements, refLabel }) =>
    React.cloneElement(extractedElements, {
      refLabel,
    }),
  FormElement: ({ extractedElements, a11yDescribedByIds }) => {
    const formElementChildren = extractedElements.map(formElement =>
      formElement.props.children.map(item =>
        item.type.displayName === "FormElement.Content"
          ? React.cloneElement(item, { wrapperA11yDescribedByIds: a11yDescribedByIds })
          : item
      )
    );

    return extractedElements.map((formElement, index) =>
      React.cloneElement(formElement, { children: formElementChildren[index] })
    );
  },
};
