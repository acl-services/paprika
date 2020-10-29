import React from "react";
import FormElement, { useFormElement, Content, Label } from "../../src";

export default function NativeInputExample() {
  const { inputA11yProps, formElementA11yProps } = useFormElement();
  const hasRequiredLabel = false;
  const isDisabled = false;
  const isReadOnly = false;
  return (
    <FormElement isDisabled={isDisabled} formElementA11yProps={formElementA11yProps}>
      <Label hasRequiredLabel={hasRequiredLabel}>Form Label</Label>
      <Content>
        <input aria-required={hasRequiredLabel} disabled={isDisabled} readOnly={isReadOnly} {...inputA11yProps} />
      </Content>
    </FormElement>
  );
}
