import React from "react";
import FormElement from "../../src";

const { Content, Label } = FormElement;

export default function NativeInputExample(props) {
  const { hasRequiredLabel, errorText, isDisabled, isReadOnly } = props;

  // This example sets the `id` and `aria-describedby` manually rather than just spreading `a11yProps`.
  // This is done to avoid the attribute warning of the `refLabel` being spread onto the input element.
  // (Paprika Input component deletes `refLabel` prop to avoid this warning)

  return (
    <FormElement>
      <Label>Form Label</Label>
      <Content>
        {a11yProps => (
          <input
            aria-required={hasRequiredLabel}
            aria-describedby={a11yProps["aria-describedby"]}
            aria-invalid={Boolean(errorText.length)}
            disabled={isDisabled}
            id={a11yProps.id}
            readOnly={isReadOnly}
          />
        )}
      </Content>
    </FormElement>
  );
}
