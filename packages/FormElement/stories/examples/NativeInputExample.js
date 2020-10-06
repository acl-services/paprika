import React from "react";
import { Tagline } from "storybook/assets/styles/common.styles";
import FormElement from "../../src/FormElement";

export default function NativeInputExample() {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;
  return (
    <>
      <Tagline>Form Element with native input.</Tagline>
      <br />
      <FormElement isDisabled={isDisabled} hasRequiredLabel={hasRequiredLabel} label="Form Label">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <input
              aria-required={hasRequiredLabel}
              aria-describedby={ariaDescribedBy}
              aria-invalid={Boolean(errorText.length)}
              disabled={isDisabled}
              id={idForLabel}
              readOnly={isReadOnly}
            />
          )}
        </FormElement.Content>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
    </>
  );
}
