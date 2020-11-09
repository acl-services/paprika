import React from "react";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import FormElement from "../../src/FormElement";

export default function ComponentLabelExample() {
  return (
    <FormElement label={<Heading level={4}>Form Label</Heading>}>
      <FormElement.Content>
        {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} />}
      </FormElement.Content>
    </FormElement>
  );
}
