import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import isNil from "lodash/isNil";

export default function useFormElement(props) {
  // const { id } = props;
  const ariaDescriptionId = React.useRef(nanoid()).current;
  const ariaErrorId = React.useRef(nanoid()).current;
  const ariaInstructionsId = React.useRef(nanoid()).current;
  const uniqueInputId = React.useRef(nanoid()).current;

  const ariaDescribedBy = `${ariaErrorId} ${ariaInstructionsId} ${ariaDescriptionId}`;
  const generateLabelId = id => (isNil(id) || id === "" ? uniqueInputId : id);
  const idForLabel = generateLabelId("");
  const refLabel = React.useRef(null);
  // const idForLabel = generateLabelId(id);

  return {
    inputA11yProps: {
      id: idForLabel,
      "aria-describedby": ariaDescribedBy,
    },
    internalA11yProps: {
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
