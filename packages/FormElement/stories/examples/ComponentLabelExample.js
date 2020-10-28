/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import FormElement, { useFormElement, Label, Content } from "../../src";

export default function ComponentLabelExample() {
  const { inputA11yProps, formElementA11yProps } = useFormElement();

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
    <FormElement formElementA11yProps={formElementA11yProps} hasRequiredLabel={hasRequiredLabel}>
      <Label>
        <Heading level={5}>
          <strong>
            <i>Form Label</i>
          </strong>
        </Heading>
      </Label>
      <Content>
        <Input
          onChange={handleChange}
          value={value}
          placeholder="Form placeholder"
          aria-required={hasRequiredLabel}
          hasError={Boolean(errorText.length)}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          size={size}
          {...inputA11yProps}
        />
      </Content>
    </FormElement>
  );
}
