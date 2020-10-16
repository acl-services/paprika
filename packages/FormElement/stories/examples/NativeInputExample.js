import React from "react";
import FormElement from "../../src/FormElement";

export default function NativeInputExample() {
  const hasRequiredLabel = false;
  const isDisabled = false;
  const isReadOnly = false;
  return (
    <FormElement isDisabled={isDisabled} hasRequiredLabel={hasRequiredLabel} label="Form Label">
      <FormElement.Content>
        {({ idForLabel, ariaDescribedBy }) => (
          <input
            aria-required={hasRequiredLabel}
            aria-describedby={ariaDescribedBy}
            disabled={isDisabled}
            id={idForLabel}
            readOnly={isReadOnly}
          />
        )}
      </FormElement.Content>
    </FormElement>
  );
}
