import React from "react";
import FormElement from "../../src/FormElement";

export default function NativeInputExample() {
  return (
    <FormElement label="Form Label">
      <FormElement.Content>
        {({ idForLabel, ariaDescribedBy }) => <input aria-describedby={ariaDescribedBy} id={idForLabel} />}
      </FormElement.Content>
    </FormElement>
  );
}
