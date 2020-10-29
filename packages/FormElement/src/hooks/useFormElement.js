import React from "react";
import nanoid from "nanoid";
import isNil from "lodash/isNil";

export default function useFormElement(props = {}) {
  const { id, wrapperAriaDescribedBy } = props;
  const ariaDescriptionId = React.useRef(nanoid()).current;
  const ariaErrorId = React.useRef(nanoid()).current;
  const ariaInstructionsId = React.useRef(nanoid()).current;
  const uniqueInputId = React.useRef(nanoid()).current;

  const ariaDescribedBy = `${ariaErrorId} ${ariaInstructionsId} ${ariaDescriptionId}`;
  const generateLabelId = id => (isNil(id) || id === "" ? uniqueInputId : id);
  const idForLabel = generateLabelId(id || "");
  const refLabel = React.useRef(null);

  return {
    inputA11yProps: {
      id: idForLabel,
      "aria-describedby": ariaDescribedBy,
    },
    checkboxA11yProps: {
      id: idForLabel,
      "aria-describedby": ariaDescribedBy,
    },
    radioA11yProps: {
      "aria-describedby": ariaDescribedBy,
    },
    datePickerA11yProps: {
      id: idForLabel,
      "aria-describedby": ariaDescribedBy,
    },
    listBoxA11yProps: {
      refLabel,
    },
    nestedFormElementA11yProps: {
      "aria-describedby": `${ariaDescribedBy} ${wrapperAriaDescribedBy}`,
    },
    formElementA11yProps: {
      labelA11yProps: {
        id: idForLabel,
        ref: refLabel,
      },
      instructionsA11yProps: {
        id: ariaInstructionsId,
      },
      descriptionA11yProps: {
        id: ariaDescriptionId,
      },
      errorA11yProps: {
        id: ariaErrorId,
      },
    },
  };
}
