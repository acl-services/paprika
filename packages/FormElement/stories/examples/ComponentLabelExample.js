/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import FormElement from "../../src/FormElement";

export default function ComponentLabelExample() {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;
  const size = constants.size.MEDIUM;
  const [value, setValue] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <FormElement
      hasRequiredLabel={hasRequiredLabel}
      label={
        <Heading level={5}>
          <strong>
            <i>Form Label</i>
          </strong>
        </Heading>
      }
    >
      <FormElement.Content>
        {({ idForLabel, ariaDescribedBy }) => (
          <Input
            id={idForLabel}
            onChange={handleChange}
            value={value}
            placeholder="Form placeholder"
            aria-describedby={ariaDescribedBy}
            aria-required={hasRequiredLabel}
            hasError={Boolean(errorText.length)}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            size={size}
          />
        )}
      </FormElement.Content>
    </FormElement>
  );
}
