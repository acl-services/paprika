import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import Input from "@paprika/input";
import FormElement, { useFormElement, Content, Label } from "../../src";

export default function HTMLExample() {
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
    <FormElement hasRequiredLabel={hasRequiredLabel} formElementA11yProps={formElementA11yProps}>
      <Label>
        <span dangerouslySetInnerHTML={{ __html: "<strong><i>Form Label</i></strong>" }} />
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
