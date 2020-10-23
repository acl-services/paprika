import React from "react";
import Input from "@paprika/input";
import FormElement from "../../src/FormElement";

export default function HTMLExample() {
  return (
    <FormElement label={<span dangerouslySetInnerHTML={{ __html: "<strong><i>Form Label</i></strong>" }} />}>
      <FormElement.Content>
        {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} />}
      </FormElement.Content>
    </FormElement>
  );
}
